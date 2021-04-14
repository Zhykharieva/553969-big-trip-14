import dayjs from 'dayjs';
const getRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomArray = (arr) => {
  return arr.slice(getRandomBetween(0, arr.length), getRandomBetween(0, arr.length));
};
const getRandomElement = (arr) => {
  return arr[getRandomBetween(0, arr.length - 1)];
};
const getRandomDate = ()=> {
  return {
    year: 2021,
    month: getRandomBetween(2,5),
    day: getRandomBetween(1, 30),
    hour: getRandomBetween(0, 23),
    minute: getRandomBetween(0, 60),
  };
};
const adaptDate = (date) => {
  return dayjs(date).format('MMM DD');
};
const adaptHours = (date) => {
  return dayjs(date).format('HH:mm');
};
const adaptFullDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};
const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};
const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};
const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;
  return newElement.firstChild;
};
export  const utils = {
  getRandomBetween,
  getRandomElement,
  getRandomArray,
  getRandomDate,
  adaptDate,
  adaptHours,
  adaptFullDate,
  RenderPosition,
  render,
  createElement,
};
