import AbstractView from './abstract.js';

const createSortTemplate = (data) => {
  return data.map((type) => {
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

export default class SortList extends AbstractView {

  constructor(data) {
    super();
    this._array = data;
  }

  getTemplate() {
    return createSortForm(this._array);
  }

}

