export function getOneYearSchema(year) {
  const yearSchema = [null];
  for (let i = 1; i <= 12; i++) {
    yearSchema.push(getMonthSchema(i));
  }

  const returnObj = {};
  returnObj[year] = yearSchema
  return returnObj;
}

function getMonthSchema(month) {
  let until = 31;
  if (month === 2) until = 28;
  else if (month % 2 === 0 || month !== 8) until = 30;

  const monthArr = [null];

  for (let i = 0; i <= until; i++) {
    monthArr.push(getDaySchema())
  }

  return Object(monthArr);
}

function getDaySchema() {
  return {
    datas: null,
    timeArray: Array(24).fill(false)
  };
}