import * as ui from "../constants/ui";

export const generateCardHeight = (start, end) => {
  return (end.slice(ui.FIRST_TIME_INDEX, ui.LAST_TIME_INDEX) - start.slice(ui.FIRST_TIME_INDEX, ui.LAST_TIME_INDEX)) * ui.BLOCK_SIZE;
};

export const generateCardLocation = (top) => {
  return top.slice(ui.FIRST_TIME_INDEX, ui.LAST_TIME_INDEX) * ui.BLOCK_SIZE;
};
