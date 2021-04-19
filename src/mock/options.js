import {helpers} from '../utils/common';
import {pointOptionsData} from '../data/point-options';
import {constants} from '../constants';

export const generateOptions = () => {
  const {getRandomBetween, getRandomElement} = helpers;
  const {  MAX_OPTIONS_QUANTITY, MIN_OPTIONS_QUANTITY } = constants;
  const { OPTIONS } = pointOptionsData;
  const optionsQuantity = getRandomBetween(MIN_OPTIONS_QUANTITY, MAX_OPTIONS_QUANTITY);
  return new Array(optionsQuantity).fill('').map((item) => {
    item = getRandomElement(OPTIONS);
    return item;
  });

};

