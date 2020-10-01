import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Week from 'components/Week/Week';
import Day from 'components/Day/Day';
import { connect } from 'react-redux';
import DateChanger from 'components/DateChanger/DateChanger';
import { setDay, setDays, setMonth } from 'action/action';

export const CalendarContainer = ({
  day,
  setDay,
  days,
  setDays,
  month,
  setMonth
}) => {
  return (
    <>
      <DateChanger
        month={month}
        setMonth={setMonth}
        day={day}
        setDay={setDay}
        days={days}
        setDays={setDays} />
      <Switch>
        <Route exact path='/' component={() => <Week days={days} />} />
        <Route exact path='/day' component={() => <Day day={day} />} />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    day: state.day, //날짜, 요일 뿌려주기 for day
    days: state.days, //날짜들, 요일들 뿌려주기 for week
    month: state.month
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDay: count => { dispatch(setDay(count)) },
    setDays: count => { dispatch(setDays(count)) },
    setMonth: count => { dispatch(setMonth(count)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
