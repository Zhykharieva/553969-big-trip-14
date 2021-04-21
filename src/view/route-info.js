import {dateAdaptors} from '../utils/date';
import AbstractView from './abstract.js';
const {adaptDate} = dateAdaptors;

const createRouteTemplate = (data) => {

  const getItinerary = function(data){
    if (data.length === 0){
      return '';
    }
    else if (data.length === 1){
      return  data[0].destination;
    }
    else if (data.length === 2){
      return  `${data[0].destination} &mdash; ${data[1].destination}`;
    }
    else if (data.length >= 3){
      return  `${data[0].destination}  &mdash;   . . .   &mdash; ${data[data.length-1].destination}`;
    }

  };
  const itinerary = getItinerary(data);

  const totalPrice = data.reduce((total, amount) => {
    return total + amount.price;
  }, 0);

  return `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
          <h1 class="trip-info__title">${itinerary}</h1>
          <p class="trip-info__dates">${adaptDate(data[0].date.dateStart)}&nbsp;&mdash;&nbsp;${adaptDate(data[data.length -1].date.dateEnd)}</p>
      </div>
      <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
  </section>`;
};

export default class RouteInfo extends AbstractView{
  constructor(data) {
    super();
    this._array = data;
  }

  getTemplate() {
    return createRouteTemplate(this._array);
  }

}
