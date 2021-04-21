import RouteInfoView from './view/route-info';
import MenuView from './view/menu';
import FiltersListView from './view/filter';

import TripPresenter from './presenter/trip';
import {generatePoint} from './mock/point';
import {TRIP_POINTS_QUANTITY} from './constants';
import {utils} from './utils/render';


const {render, RenderPosition} = utils;

const tripPointsArray = new Array(TRIP_POINTS_QUANTITY).fill('').map(generatePoint).sort((point1, point2) => {
  return point1.date.dateStart - point2.date.dateStart;
});
const routeInfoElem = new RouteInfoView(tripPointsArray);
const siteTripMainElement = document.querySelector('.trip-main');
const siteMenuElement = siteTripMainElement.querySelector('.trip-controls__navigation');
const siteFilterElement = siteTripMainElement.querySelector('.trip-controls__filters');
const siteEventsElement = document.querySelector('.trip-events');

render(siteTripMainElement, routeInfoElem, RenderPosition.AFTERBEGIN);
render(siteMenuElement, new MenuView(), RenderPosition.BEFOREEND);
render(siteFilterElement, new FiltersListView(), RenderPosition.BEFOREEND);

const tripPresenter = new TripPresenter(siteEventsElement);

tripPresenter.init(tripPointsArray);
