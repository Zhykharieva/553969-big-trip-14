import AbstractView from './abstract.js';

const FILTER_TYPES =  ['everything', 'future', 'past'];

const createFilterTemplate = () => {
  return FILTER_TYPES.map((type) => {
    return `<div class="trip-filters__filter">
      <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}">
      <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
    </div>`;
  }).join('');
};

const createFilterForm = (filtersTypes) => {
  const filters = createFilterTemplate(filtersTypes);
  return `<form class="trip-filters" action="#" method="get">
              <button class="visually-hidden" type="submit">Accept filter</button>
              ${filters}
          </form>`;
};

export default class Filter extends AbstractView {

  getTemplate() {
    return createFilterForm();
  }
}
