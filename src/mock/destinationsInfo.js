import {utils} from '../utils/utils';
import {pointOptionsData} from '../data/point-options';
const {getRandomBetween,  getRandomArray} = utils;
const { RANDOM_DESCRIPTION, MIN_OPTIONS_QUANTITY, MAX_OPTIONS_QUANTITY } = pointOptionsData;
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
