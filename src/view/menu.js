import AbstractView from './abstract.js';
export const MENU_TYPES =  ['Table', 'Stats'];
const createMenuTemplate = () => {
  return MENU_TYPES.map((type) => {
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

  getTemplate() {
    return createMenuNav();
  }

}
