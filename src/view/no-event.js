import {utils} from '../utils/utils';
const {createElement} = utils;
const createNoEventTemplate = () => {
  return `<p class="trip-events__msg">
            Click New Event to create your first point
          </p>`;
};
export default class NoEventView {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return  createNoEventTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  clearElement() {
    this._element = null;
  }
}


