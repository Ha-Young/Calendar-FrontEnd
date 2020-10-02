import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { addDays, subDays, format } from 'date-fns';
import { setDay, setWeek, setMonth, setYear } from 'action/action';
import DateChanger from 'components/DateChanger/DateChanger';
import Day from 'components/Day/Day';
import Week from 'components/Week/Week';

export const CalendarContainer = ({
  setDay,
  setMonth,
  setYear,
  setWeek,
  week,
  calendarType
}) => {
  const [count, setCount] = useState(1);
  const date = addDays(new Date(), count);

  let month = format(date, 'MM');
  let day = format(date, 'dd');
  let year = format(date, 'yyyy');

  useEffect(() => {
    setDay(day);
    setMonth(month);
    setYear(year);
  }, [count, week]);

  const addDay = count => {
    const date = addDays(new Date(`${year},${month},${day}`), count);
    const formattedDay = format(date, 'dd');

    return formattedDay;
  };

  const addWeek = (week, buttonName) => {
    const keys = Object.keys(week);
    const nextDays = [];

    for (let i = 0; i < keys.length; i++) {
      let date;
      if (buttonName === 'prev') {
        date = subDays(new Date(`${year},${month},${week[keys[i]]}`), 7);
      } else {
        date = addDays(new Date(`${year},${month},${week[keys[i]]}`), 7);
      }
      const nextDay = format(date, 'dd');
      nextDays.push(nextDay);
    }
    setWeek({
      mon: nextDays[0],
      tue: nextDays[1],
      wen: nextDays[2],
      thu: nextDays[3],
      fri: nextDays[4],
      sat: nextDays[5],
      sun: nextDays[6]
    });
  };

  const onDateChangerClick = event => {
    const { target: { name } } = event;

    if (calendarType === 'DAY') {
      switch (name) {
        case 'prev':
          setCount(count => count - 1);
          break;
        case 'next':
          setCount(count => count + 1);
          break;
      }
    }
    if (calendarType === 'WEEK') {
      addWeek(week, name);
      setCount(count => count + 7);
    }
  };

  return (
    <>
      <DateChanger
        onClick={onDateChangerClick}
        month={month}
        year={year}
      />
      <Switch>
        <Route exact path='/'>
          <Week
            day={day}
            week={week}
            onWeekdayAdd={addDay}
            onWeekInitSet={setWeek}
          />
        </Route>
        <Route path='/day'>
          <Day day={day} />
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = state => {
  return {
    calendarType: state.calendarType,
    week: state.week
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDay: oneDay => { dispatch(setDay(oneDay)) },
    setWeek: week => { dispatch(setWeek(week)) },
    setMonth: oneMonth => { dispatch(setMonth(oneMonth)) },
    setYear: oneYear => { dispatch(setYear(oneYear)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
