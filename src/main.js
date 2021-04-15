import RouteInfoView from './view/route-info';
import MenuView from './view/menu';
import FiltersListView from './view/filter';
import SortListView from './view/sort';
import EventListView from './view/event-list';
import EditPointView from './view/form-edit';
import TripPointView from './view/point';
import NoEventView from './view/point';
import {generatePoint} from './mock/point';
import {pointOptionsData} from './data/point-options';
import {utils} from './utils/render';
import {isEscPressed} from './utils/events';

const {render, RenderPosition, replace} = utils;

const tripPointsArray = new Array(pointOptionsData.TRIP_POINTS_QUANTITY).fill('').map(generatePoint).sort((point1, point2) => {
  return point1.date.dateStart - point2.date.dateStart;
});

const routeInfoElem = new RouteInfoView(tripPointsArray);
const siteTripMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(siteTripMainElement, routeInfoElem, RenderPosition.AFTERBEGIN);
render(siteMenuElement, new MenuView(pointOptionsData.MENU), RenderPosition.BEFOREEND);
render(siteFilterElement, new FiltersListView(pointOptionsData.FILTER_TYPES), RenderPosition.BEFOREEND);
render(siteEventsElement, new SortListView(pointOptionsData.SORT_TYPES), RenderPosition.BEFOREEND);
render(siteEventsElement, new EventListView(), RenderPosition.BEFOREEND);

const eventsListElement = siteEventsElement.querySelector('.trip-events__list');

const renderEventsList = (eventsListContainer, points) => {
  if (!points.length) {
    render(eventsListContainer, new NoEventView(), RenderPosition.BEFOREEND);
    return ;
  }
  points.forEach((point) => {
    const currentPoint = new TripPointView(point);
    const currentEditForm = new EditPointView(point);

    render(eventsListElement, currentPoint, RenderPosition.AFTERBEGIN);

    const replacePointToEditForm = () => {
      replace( currentEditForm, currentPoint);
    };

    const replaceFormToPoint = () => {
      replace(currentPoint, currentEditForm);
    };

    currentPoint.setEditClickHandler(() => {
      replacePointToEditForm();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    const escKeyDownHandler = (evt) => {
      if (isEscPressed) {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    currentEditForm.setFormSubmitHandler(() => {
      replaceFormToPoint();
    });

  });
};

renderEventsList(eventsListElement, tripPointsArray);

