import {helpers} from '../utils/common';
import {pointOptionsData} from '../data/point-options';

export const generateOptions = () => {
  const {getRandomBetween, getRandomElement} = helpers;
  const { OPTIONS, MAX_OPTIONS_QUANTITY, MIN_OPTIONS_QUANTITY } = pointOptionsData;
  const optionsQuantity = getRandomBetween(MIN_OPTIONS_QUANTITY, MAX_OPTIONS_QUANTITY);
  return new Array(optionsQuantity).fill('').map((item) => {
    item = getRandomElement(OPTIONS);
    return item;
  });

};

