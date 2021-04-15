import dayjs from 'dayjs';

const adaptDate = (date) => {
  return dayjs(date).format('MMM DD');
};

const adaptHours = (date) => {
  return dayjs(date).format('HH:mm');
};

const adaptFullDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export  const dateAdaptors = {
  adaptDate,
  adaptHours,
  adaptFullDate,
};
