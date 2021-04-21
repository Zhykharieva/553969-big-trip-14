import {helpers} from '../utils/common';
import {pointOptionsData} from '../data/point-options';
import {Options} from '../constants';
const {getRandomBetween,  getRandomArray} = helpers;
const { RANDOM_DESCRIPTION } = pointOptionsData;
const getRandomDescriptionsArray = RANDOM_DESCRIPTION.split('.');

export const generateDestinationsInfo = () => {
  const photos =  new Array(getRandomBetween(Options.MIN, Options.MAX)).fill('').map(() => {
    return `http://picsum.photos/248/152?r=${getRandomBetween(0, 100)}`;
  });
  return {
    description: getRandomArray(getRandomDescriptionsArray).join('. '),
    photos: photos,
  };

};
