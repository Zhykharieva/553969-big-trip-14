import {helpers} from '../utils/common';
import {pointOptionsData} from '../data/point-options';
import {constants} from '../constants';
const {getRandomBetween,  getRandomArray} = helpers;
const { RANDOM_DESCRIPTION } = pointOptionsData;
const {  MAX_OPTIONS_QUANTITY, MIN_OPTIONS_QUANTITY } = constants;
const getRandomDescriptionsArray = RANDOM_DESCRIPTION.split('.');

export const generateDestinationsInfo = () => {
  const photos =  new Array(getRandomBetween(MIN_OPTIONS_QUANTITY, MAX_OPTIONS_QUANTITY)).fill('').map(() => {
    return `http://picsum.photos/248/152?r=${getRandomBetween(0, 100)}`;
  });
  return {
    description: getRandomArray(getRandomDescriptionsArray).join('. '),
    photos: photos,
  };

};
