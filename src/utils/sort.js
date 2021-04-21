
export const sortByDuration = (point1, point2) => {
  return (point2.date.durationMiliseconds - point1.date.durationMiliseconds) || (point2.price - point1.price);
};

export const sortByPrice = (point1, point2) => {
  return (point2.price - point1.price) || (point2.date.durationMiliseconds - point1.date.durationMiliseconds);
};
