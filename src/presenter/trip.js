import EventListView from '../view/event-list';
import NoEventView from '../view/point';
import PointPresenter from './point';
import SortListView from '../view/sort';
import {utils} from '../utils/render';
import {helpers } from '../utils/common';
const {render, RenderPosition} = utils;
const {updateItem} = helpers;
export default class Trip {
  constructor(tripContainer, sortTypes) {
    this._tripContainer = tripContainer;
    this._noEventsComponent = new NoEventView();
    this._eventsListComponent = new EventListView();
    this._sortComponent = new SortListView(sortTypes);
    this._pointPresenter = {};

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
  }

  init(points) {
    this._tripPoints = points.slice();
    this._sourcedTripPoints = points.slice();

    render(this._tripContainer, this._sortComponent, RenderPosition.BEFOREEND);
    render(this._tripContainer, this._eventsListComponent, RenderPosition.BEFOREEND);

    this._renderPoints();
  }

  _handleModeChange() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handlePointChange(updatedPoint) {

    this._tripPoints = updateItem(this._tripPoints, updatedPoint);
    this._sourcedTripPoints = updateItem(this._sourcedTripPoints, updatedPoint);
    this._pointPresenter[updatedPoint.id].init(updatedPoint);
  }

  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._eventsListComponent, this._handlePointChange, this._handleModeChange);
    pointPresenter.init(point);
    this._pointPresenter[point.id] = pointPresenter;
  }

  _renderPoints() {
    if(!this._tripPoints.length){
      this._renderNoPoints();
      return;
    }
    this._tripPoints
      .slice()
      .forEach((point) => this._renderPoint(point));
  }

  _renderNoPoints() {
    render(this._tripContainer, this._noEventsComponent, RenderPosition.AFTERBEGIN);
  }


  _clearPointsList() {
    Object
      .values(this._pointPresenter)
      .forEach((presenter) => presenter.destroy());
    this._pointPresenter = {};

  }
}
