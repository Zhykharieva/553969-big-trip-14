import {utils} from '../utils/utils';
export const createRouteTemplate = (data) => {
  const {adaptDate} = utils;
  const itinerary = data.map((point) => {
    return point.destination;}).join(' &mdash; ');
  const totalPrice = data.reduce((total, amount) => {
    return total + amount.price;
  }, 0);
  return `
  <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
          <h1 class="trip-info__title">${itinerary}</h1>
          <p class="trip-info__dates">${adaptDate(data[0].date.dateStart)}&nbsp;&mdash;&nbsp;${adaptDate(data[data.length -1].date.dateEnd)}</p>
      </div>
      <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice}</span>
      </p>
  </section>
`;
} ;
