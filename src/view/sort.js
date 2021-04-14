import {utils} from '../utils/utils';
const {createElement} = utils;
const createSortTemplate = (data) => {
  return  data.map((type) => {
    return `
    <div class="trip-sort__item  trip-sort__item--${type}">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}">
      <label class="trip-sort__btn" for="sort-day">${type}</label>
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
export default class SortList {
  constructor(data) {
    this._element = null;
    this._array = data;
  }
  getTemplate () {
    return createSortForm(this._array);
  }

  getElement () {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  clearElement() {
    this._element = null;
  }
}

