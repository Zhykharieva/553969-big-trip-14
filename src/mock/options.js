import {helpers} from '../utils/common';
import {pointOptionsData} from '../data/point-options';
import {Options} from '../constants';

export const generateOptions = () => {
  const {getRandomBetween, getRandomElement} = helpers;

  const { OPTIONS } = pointOptionsData;
  const optionsQuantity = getRandomBetween(Options.MIN, Options.MAX);
  return new Array(optionsQuantity).fill('').map((item) => {
    item = getRandomElement(OPTIONS);
    return item;
  });

};

