
//나중에 유즈메모 사용가능할듯
export default function arrangeDatesWeeklyBasis () {
  const today = new Date();
  const thisMonthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const thisMonthLastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth() + -1, 0).getDate();
  let nextMonthFirstDate = new Date(today.getFullYear(), today.getMonth() + 1, 1).getDate();
  
  const weeklyBasisDates = [];
  let eachWeek = [];
  let isExcuted = false;
  
  for (let date = 1; date < thisMonthLastDate + 1; date++) {  
    if (thisMonthFirstDay && !isExcuted) {
      let count = thisMonthFirstDay;  
      isExcuted = true;

      while (count) {
        eachWeek.push(prevMonthLastDate - count + 1);
        count--;
      }      
    }  

    if (eachWeek.length < 7) eachWeek.push(date);
    
    if (date === thisMonthLastDate && eachWeek.length !== 7) {
      while (eachWeek.length < 7) {
        eachWeek.push(nextMonthFirstDate);
        nextMonthFirstDate++
      }
    }

    if (eachWeek.length === 7) {
      weeklyBasisDates.push(eachWeek);
      eachWeek = [];
    }
  }
  return weeklyBasisDates;
}
