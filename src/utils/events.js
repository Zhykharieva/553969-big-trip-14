const Keys = {
  ESCAPE: 'Escape',
  ESC: 'Esc',
};

export const isEscPressed = (evt) => evt.key === Keys.ESCAPE || evt.key === Keys.ESC;
