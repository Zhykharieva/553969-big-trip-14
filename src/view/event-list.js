import AbstractView from './abstract.js';

const createEventListTemplate = () => {
  return `<ul class="trip-events__list">
  </ul>`;
};

export default class EventsList extends AbstractView {

  getTemplate() {
    return createEventListTemplate();
  }

}
