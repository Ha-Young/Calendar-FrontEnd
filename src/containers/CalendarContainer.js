import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { addDays, format } from 'date-fns';
import { setDay, setMonth, setYear } from 'action/action';
import DateChanger from 'components/DateChanger/DateChanger';
import Day from 'components/Day/Day';
import Week from 'components/Week/Week';

export const CalendarContainer = ({ setDay, setMonth, setYear }) => {
  const [count, setCount] = useState(1);
  const date = addDays(new Date(), count);
  let month = format(date, 'MM');
  let day = format(date, 'dd');
  let year = format(date, 'yyyy');

  useEffect(() => {
    setDay(day);
    setMonth(month);
    setYear(year);
  }, [count]);

  const onDateChangerClick = event => {
    const { target: { name } } = event;

    switch (name) {
      case 'prev':
        setCount(count => count - 1);
        break;
      case 'next':
        setCount(count => count + 1);
        break;
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
        <Route exact path='/'
          component={() => <Week day={day}
          />}
        />
        <Route path='/day'
          component={() => <Day day={day}
          />}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = state => {
  return {
    calendarType: state.calendarType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDay: count => { dispatch(setDay(count)) },
    setMonth: count => { dispatch(setMonth(count)) },
    setYear: count => { dispatch(setYear(count)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
