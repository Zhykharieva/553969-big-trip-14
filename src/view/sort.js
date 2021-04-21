import AbstractView from './abstract.js';
const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];
const createSortTemplate = ( sortType) => {

  return SORT_TYPES.map((type) => {
    return `
    <div class="trip-sort__item  trip-sort__item--${type}"  >
      <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}" data-sort-type="${type}"${sortType === type ? 'checked' : ''}>
      <label class="trip-sort__btn" for="sort-${type}">${type}</label>
    </div>
    `;
  }).join('');
};

const createSortForm = (sortsTypes) => {
  const sortsElem = createSortTemplate(sortsTypes);
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
              <button class="visually-hidden" type="submit">Accept filter</button>
              ${sortsElem}
          </form>`;
};

export default class SortList extends AbstractView {

  constructor( sortType) {
    super();
    this._sortType = sortType;

    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createSortForm( this._sortType);
  }

  _sortTypeChangeHandler(evt) {
    if (!evt.target.classList.contains('trip-sort__input')) {
      return;
    }
    evt.preventDefault();
    this._callback.sortTypeChange(evt.target.dataset.sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener('click', this._sortTypeChangeHandler);
  }

}

