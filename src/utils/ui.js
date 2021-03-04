const BLOCK_SIZE = 51;
const FIRST_TIME_INDEX = 0;
const LAST_TIME_INDEX = 2;

export const generateCardHeight = (start, end) => {
  return (end.slice(FIRST_TIME_INDEX, LAST_TIME_INDEX) - start.slice(FIRST_TIME_INDEX, LAST_TIME_INDEX)) * BLOCK_SIZE;
};

export const generateCardLocation = (top) => {
  return top.slice(FIRST_TIME_INDEX, LAST_TIME_INDEX) * BLOCK_SIZE;
};
