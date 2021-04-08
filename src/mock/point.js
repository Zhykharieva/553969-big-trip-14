import {utils} from '../utils/utils';
import {pointOptionsData} from '../data/point-options';
import {generateOptions} from './options';
import {generateDestinationsInfo} from './destinationsInfo';
import { generateDate } from './date';

export const generatePoint = () => {
  const {getRandomBetween, getRandomElement} = utils;
  const { TRANSPORT_TYPES,  CITIES} = pointOptionsData;


  return {
    types: TRANSPORT_TYPES,
    pointType: getRandomElement(TRANSPORT_TYPES),
    destinations: CITIES,
    destination: getRandomElement(CITIES),
    options: generateOptions(),
    date: generateDate(),
    price: getRandomBetween(0, 300),
    destinationInfo: generateDestinationsInfo(),
    isFavorite:  Boolean(getRandomBetween(0, 1)),
  };
};

