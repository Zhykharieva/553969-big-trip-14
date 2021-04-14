import {utils} from '../utils/utils';
const {createElement} = utils;
const createMenuTemplate = (data) => {
  return  data.map((type) => {
    return `<a class="trip-tabs__btn  trip-tabs__btn" href="#">${type}</a>`;
  }).join('');
};
const createMenuNav = (menu) => {
  const menuElem = createMenuTemplate(menu);
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
              ${menuElem}
          </nav>`;
};
export default class SiteMenuView {
  constructor(data) {
    this._element = null;
    this._array = data;
  }
  getTemplate () {
    return createMenuNav(this._array);
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
