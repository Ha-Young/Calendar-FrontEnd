export function getPastDate(date, num) {
  const result = new Date(date);
  result.setDate(date.getDate() - num);
  return result;
}

export function getFutureDate(date, num) {
  const result = new Date(date);
  result.setDate(date.getDate() + num);
  return result;
}

export function getDivsFor24Hours() {
  let array = new Array(24).fill(0);
  let count = 0;
  array = array.map(() => count++);

  return array;
}
