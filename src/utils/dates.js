
//나중에 유즈메모 사용가능할듯
export default function getMonthlyDates (move) {
  //12월 > 1월 갈때, 1월 > 12월 갈때 년도 바뀌는 로직 추가해야함
  const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
  const today = new Date();
  const thisMonthFirstDay = new Date(today.getFullYear(), today.getMonth() + move, 1).getDay();
  const thisMonthLastDate = new Date(today.getFullYear(), today.getMonth() + move + 1, 0).getDate();
  const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth() + move, 0).getDate();
  let nextMonthFirstDate = new Date(today.getFullYear(), today.getMonth() + move + 1, 1).getDate();
  
  const monthlyDates = [];
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
      monthlyDates.push(eachWeek);
      eachWeek = [];
    }
  }
  
  return {
    today: today.getDate(),
    thisMonth: monthes[today.getMonth()], 
    monthlyDates,
  };
}

export function getWeeklyDates (move) {
  const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
  const today = new Date();
  const thisMonthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const thisMonthLastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  let nextMonthFirstDate = new Date(today.getFullYear(), today.getMonth() + 1, 1).getDate();
  debugger;
  const monthlyDates = [];
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
      monthlyDates.push(eachWeek);
      eachWeek = [];
    }
  }

  return (function (move) {
    let targetIndex;
    monthlyDates.forEach((week, i) => {
      if (week.includes(today.getDate())) {
        targetIndex = i;
      }
    });

    if (!move) move = 0;

    if (monthlyDates[targetIndex + move]) {
      return {
        today: today.getDate(),
        thisMonth: monthes[today.getMonth()],
        weeklyDates: [monthlyDates[targetIndex + move]],
      };
    }
  //else면 다시 불러오기 
  })(move);

}