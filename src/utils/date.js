
export default function getMonthlyDates (changeMonth) {
  if (!changeMonth) changeMonth = 0;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  const thisMonthFirstDay = new Date(today.getFullYear(), today.getMonth() + changeMonth, 1).getDay();
  const thisMonthLastDate = new Date(today.getFullYear(), today.getMonth() + changeMonth + 1, 0).getDate();
  const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth() + changeMonth, 0).getDate();
  let nextMonthFirstDate = new Date(today.getFullYear(), today.getMonth() + changeMonth + 1, 1).getDate();
  
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
        nextMonthFirstDate++;
      }
    }

    if (eachWeek.length === 7) {
      monthlyDates.push(eachWeek);
      eachWeek = [];
    }
  }
  
  return {
    today: today.getDate(),
    title: monthes[today.getMonth()],
    thisMonth: monthes[today.getMonth() + changeMonth],
    monthlyDates,
  };
}

export function getWeeklyDates (changeWeek) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();
  const thisMonthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const thisMonthLastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const prevMonthLastDate = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  let nextMonthFirstDate = new Date(today.getFullYear(), today.getMonth() + 1, 1).getDate();
  
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
        nextMonthFirstDate++;
      }
    }

    if (eachWeek.length === 7) {
      monthlyDates.push(eachWeek);
      eachWeek = [];
    }
  }

  return (function getSpecificWeek (changeWeek) {
    let targetIndex;
    monthlyDates.forEach((week, i) => {
      if (week.includes(today.getDate())) {
        targetIndex = i;
      }
    });

    if (!changeWeek) changeWeek = 0;

    if (monthlyDates[targetIndex + changeWeek]) {
      return {
        today: today.getDate(),
        title: monthes[today.getMonth()],
        thisMonth: monthes[today.getMonth() + changeWeek],
        weeklyDates: [monthlyDates[targetIndex + changeWeek]],
      };
    }

    const adjacentMonthDates = getMonthlyDates(changeWeek);
    const presentMonthlyDates = [...monthlyDates];
    let newMonthlyDates;

    if (targetIndex + changeWeek < 0) {
      presentMonthlyDates.shift();
      newMonthlyDates = [...adjacentMonthDates.monthlyDates, ...presentMonthlyDates];
  
      return {
        today: today.getDate(),
        title: monthes[today.getMonth()],
        thisMonth: monthes[today.getMonth() + changeWeek],
        weeklyDates: [newMonthlyDates[adjacentMonthDates.monthlyDates.length - 1 + changeWeek]],
      };
    }

    adjacentMonthDates.shift();
    newMonthlyDates = [...presentMonthlyDates, ...adjacentMonthDates.monthlyDates];

    return {
      today: today.getDate(),
      title: monthes[today.getMonth()],
      thisMonth: monthes[today.getMonth() + changeWeek],
      weeklyDates: [newMonthlyDates[presentMonthlyDates.length - 1 + changeWeek]],
    };
  })(changeWeek);
}
