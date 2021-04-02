import {createRouteTemplate} from './view/route-info';
import {createMenuTemplate} from './view/menu';
import {createFilterTemplate} from './view/filter';
import {createSortTemplate} from './view/sort';
import {createEventListTemplate} from './view/event-list';
import {createEditPointTemplate} from './view/form-edit';
import {createPointTemplate} from './view/point';


const POINTS_COUNT = 3;
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteTripMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');


render(siteTripMainElement, createRouteTemplate(), 'afterbegin');
render(siteMenuElement, createMenuTemplate(), 'beforeend');
render(siteFilterElement, createFilterTemplate(), 'beforeend');
render(siteEventsElement, createSortTemplate(), 'beforeend');
render(siteEventsElement, createEventListTemplate(), 'beforeend');

const eventsListElement = siteEventsElement.querySelector('.trip-events__list');
render(eventsListElement, createEditPointTemplate(), 'afterbegin');
for (let i=0; i < POINTS_COUNT; i++) {
  render(eventsListElement, createPointTemplate(), 'beforeend');
}
