import EventListView from '../view/event-list';
import NoEventView from '../view/point';
import PointPresenter from './point';
import SortListView from '../view/sort';
import {utils} from '../utils/render';
import {helpers } from '../utils/common';
import { SortType } from '../constants';
import { sortByPrice, sortByDuration} from '../utils/sort';


const {render, RenderPosition} = utils;
const {updateItem} = helpers;

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._pointPresenter = {};
    this._currentSortType = SortType.DEFAULT;
    this._sortComponent = null;

    this._noEventsComponent = new NoEventView();
    this._eventsListComponent = new EventListView();

    this._handlePointChange = this._handlePointChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
  }

  init(points) {
    this._tripPoints = points.slice();
    this._sourcedTripPoints = points.slice();

    render(this._tripContainer, this._eventsListComponent, RenderPosition.BEFOREEND);
    this._renderSort();
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

  _sortPoints(sortType) {

    switch (sortType) {
      case SortType.TIME:
        this._tripPoints.sort(sortByDuration);
        break;
      case SortType.PRICE:
        this._tripPoints.sort(sortByPrice);
        break;
      default:
        this._tripPoints = this._sourcedTripPoints.slice();
    }

    this._currentSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointsList();
    this._renderPoints();
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new SortListView(this._currentSortType);
    render(this._tripContainer, this._sortComponent, RenderPosition.AFTERBEGIN);
    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
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
