import {createRouteTemplate} from './view/route-info';
import {createMenuTemplate} from './view/menu';
import {createFilterTemplate} from './view/filter';
import {createSortTemplate} from './view/sort';
import {createEventListTemplate} from './view/event-list';
import {createEditPointTemplate} from './view/form-edit';
import {createPointTemplate} from './view/point';
import {generatePoint} from './mock/point';
import {pointOptionsData} from './data/point-options';


const tripPointsArray = new Array(pointOptionsData.TRIP_POINTS_QUANTITY).fill('').map(generatePoint).sort((point1, point2) => {
  return point1.date.dateStart - point2.date.dateStart;
});
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');


render(siteTripMainElement, createRouteTemplate(tripPointsArray), 'afterbegin');
render(siteMenuElement, createMenuTemplate(), 'beforeend');
render(siteFilterElement, createFilterTemplate(), 'beforeend');
render(siteEventsElement, createSortTemplate(), 'beforeend');
render(siteEventsElement, createEventListTemplate(), 'beforeend');

const eventsListElement = siteEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createEditPointTemplate(tripPointsArray[0]), 'afterbegin');

tripPointsArray.forEach((point) => {
  render(eventsListElement, createPointTemplate(point), 'beforeend');
});


