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

export function getArrayOfNumbers(num) {
  let array = new Array(num).fill(0);
  let count = 0;
  array = array.map(() => count++);

  return array;
}
