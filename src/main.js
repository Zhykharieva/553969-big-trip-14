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
import {utils} from './utils/utils';
const {render, RenderPosition} = utils;
const tripPointsArray = new Array(pointOptionsData.TRIP_POINTS_QUANTITY).fill('').map(generatePoint).sort((point1, point2) => {
  return point1.date.dateStart - point2.date.dateStart;
});
const routeInfoElem = new RouteInfoView(tripPointsArray).getElement();
const siteTripMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');

const siteFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');
render(siteTripMainElement, routeInfoElem, RenderPosition.AFTERBEGIN);
render(siteMenuElement, new MenuView(pointOptionsData.MENU).getElement(), RenderPosition.BEFOREEND);
render(siteFilterElement, new FiltersListView(pointOptionsData.FILTER_TYPES).getElement(), RenderPosition.BEFOREEND);
render(siteEventsElement, new SortListView(pointOptionsData.SORT_TYPES).getElement(), RenderPosition.BEFOREEND);
render(siteEventsElement, new EventListView().getElement(), RenderPosition.BEFOREEND);
const eventsListElement = siteEventsElement.querySelector('.trip-events__list');

const renderEventsList = (eventsListContainer, points) => {
  if (points.length === 0) {
    render(eventsListContainer, new NoEventView(), RenderPosition.BEFOREEND);
    return ;
  }
  points.forEach((point) => {
    const currentPoint = new TripPointView(point).getElement();
    const currentEditForm = new EditPointView(point).getElement();
    render(eventsListElement, currentPoint, RenderPosition.AFTERBEGIN);
    const replacePointToEditForm = () => {
      eventsListContainer.replaceChild( currentEditForm, currentPoint);
    };
    const replaceFormToPoint = () => {
      eventsListContainer.replaceChild(currentPoint, currentEditForm);
    };
    currentPoint.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replacePointToEditForm();
    });
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    currentEditForm.querySelector('form').addEventListener('submit', (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
    });
    document.addEventListener('keydown', onEscKeyDown);
  });
};
renderEventsList(eventsListElement, tripPointsArray);

