import AbstractView from './abstract.js';

const createMenuTemplate = (data) => {
  return data.map((type) => {
    return `<a class="trip-tabs__btn  trip-tabs__btn" href="#">${type}</a>`;
  }).join('');
};

const createMenuNav = (menu) => {
  const menuElem = createMenuTemplate(menu);
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
              ${menuElem}
          </nav>`;
};

export default class SiteMenuView extends AbstractView {

  constructor(data) {
    super();
    this._array = data;
  }

  getTemplate() {
    return createMenuNav(this._array);
  }

}
