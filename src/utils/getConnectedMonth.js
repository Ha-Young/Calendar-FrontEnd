function getConnectedMonth(weekArray) {
  const month = [];

  for (let i = 0; i < weekArray.length; i++) {
    const currentMonth = weekArray[i].slice(5, 7);

    if (!month.includes(currentMonth)) {
      month.push(currentMonth);
    }
  }

  return month;
}

export default getConnectedMonth;
