import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Week from 'components/Week/Week';
import Day from 'components/Day/Day';
import { connect } from 'react-redux';
import DateChanger from 'components/DateChanger/DateChanger';
import { setDay, setDays, setMonth, setYear } from 'action/action';

export const CalendarContainer = ({
  day,
  setDay,
  days,
  setDays,
  month,
  setMonth,
  year,
  setYear
}) => {
  return (
    <>
      <DateChanger
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
        days={days}
        setDays={setDays}
        year={year}
        setYear={setYear} />
      <Switch>
        <Route exact path='/' component={() => <Week days={days} />} />
        <Route exact path='/day' component={() => <Day day={day} />} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    day: state.day,
    days: state.days,
    month: state.month,
    year: state.year
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDay: count => { dispatch(setDay(count)) },
    setDays: count => { dispatch(setDays(count)) },
    setMonth: count => { dispatch(setMonth(count)) },
    setYear: count => { dispatch(setYear(count)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
