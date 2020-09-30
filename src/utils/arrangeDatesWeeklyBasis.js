
//나중에 유즈메모 사용가능할듯
export default function arrangeDatesWeeklyBasis (move) {
  //12월 > 1월 갈때, 1월 > 12월 갈때 년도 바뀌는 로직 추가해야함
  const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
  const today = new Date();
  const thisMonthFirstDay = new Date(today.getFullYear(), today.getMonth() + move, 1).getDay();
  const thisMonthLastDate = new Date(today.getFullYear(), today.getMonth() + move + 1, 0).getDate();
  const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth() + move + -1, 0).getDate();
  let nextMonthFirstDate = new Date(today.getFullYear(), today.getMonth() + move + 1, 1).getDate();
  
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
  return {thisMonth: monthes[today.getMonth()], weeklyBasisDates};
}
