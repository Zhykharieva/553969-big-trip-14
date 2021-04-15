const getRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = (arr) => {
  return arr.slice(getRandomBetween(0, arr.length),
    getRandomBetween(0, arr.length));
};

const getRandomElement = (arr) => {
  return arr[getRandomBetween(0, arr.length - 1)];
};

const getRandomDate = () => {
  return {
    year: 2021,
    month: getRandomBetween(2, 5),
    day: getRandomBetween(1, 30),
    hour: getRandomBetween(0, 23),
    minute: getRandomBetween(0, 60),
  };
};

export const helpers = {
  getRandomBetween,
  getRandomElement,
  getRandomArray,
  getRandomDate,
};
