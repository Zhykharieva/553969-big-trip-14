import {dateAdaptors} from '../utils/date';
import AbstractView from './abstract.js';

const {adaptDate, adaptHours, adaptFullDate} = dateAdaptors;
const createPointTemplate = (data) => {
  const {
    date,
    destination,
    pointType,
    price,
    options,
    isFavorite,
  } = data;
  const {
    dateStart,
    dateEnd,
    duration,
  } = date;

  const favoriteBtn = isFavorite ?'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime=${adaptFullDate(dateStart)}>${adaptDate(dateStart)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${pointType} ${destination}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime=${adaptFullDate(dateStart)}>${adaptHours(dateStart)}</time>
        &mdash;
        <time class="event__end-time" datetime=${adaptFullDate(dateEnd)}>${adaptHours(dateEnd)}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${options[0].text}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${options[0].price}</span>
      </li>
    </ul>
    <button class="${favoriteBtn}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

export default class TripPoint extends AbstractView {

  constructor(point) {
    super();
    this._point = point;

    this._editClickHandler = this._editClickHandler.bind(this);
    this._favoriteClickHandler = this._favoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createPointTemplate(this._point);
  }

  _editClickHandler(evt) {
    evt.preventDefault();
    this._callback.editClick();
  }

  _favoriteClickHandler(evt) {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setEditClickHandler(callback) {
    this._callback.editClick = callback;
    this.getElement().querySelector('.event__rollup-btn').addEventListener('click', this._editClickHandler);
  }

  setFavoriteClickHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement().querySelector('.event__favorite-btn').addEventListener('click', this._favoriteClickHandler);
  }

}
