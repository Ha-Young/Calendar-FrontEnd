function getCurrentDate(currentDate) {
  const theYear = currentDate.getFullYear();
  const theMonth = Number(currentDate.getMonth()) + 1;
  const theDate = currentDate.getDate();
  const mm = String(theMonth).length === 1 ? "0" + theMonth : theMonth;
  const dd = String(theDate).length === 1 ? "0" + theDate : theDate;

  return theYear + "-" + mm + "-" + dd;
}

export default getCurrentDate;
