
import {helpers} from '../utils/common';

const {getRandomBetween, getRandomDate} = helpers;
const MILLISECONDS_IN_MINUTE = 60000;

export const generateDate = () => {
  const someDate = getRandomDate();
  const {year, day, month, hour, minute} = someDate;
  const startDate = +new Date(year, day, month, hour, minute);
  const milisecondsGap = getRandomBetween(1, 24000000);
  const minuteGap = Math.floor(milisecondsGap / MILLISECONDS_IN_MINUTE);
  const dateFinish =  startDate + milisecondsGap;
  const duration = (minuteGap < 60) ? `${minuteGap}M` : `${Math.floor(minuteGap / 60)}H ${minuteGap % 60}M `;
  return {

    dateStart: startDate,
    dateEnd: dateFinish,
    duration: duration,

  };

};
