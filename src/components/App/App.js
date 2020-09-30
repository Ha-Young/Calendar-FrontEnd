import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import Header from '../Header/Header';
import { saveSampleData } from '../../utils/api';
import getMonthlyDates, { getWeeklyDates } from '../../utils/dates';
import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import CalendarContainer from '../Calendar/CalendarContainer/CalendarContainer';

const Wrapper = styled.div`
  height: 100vh;
  display:grid;
  grid-template-rows: 15% 1fr;
  padding-bottom: 50px;
`;

const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr;
`;

// Feel free to modify as you need.
function App() {
  const [ changeMonth, setChangeMonth ] = useState(0);
  const [ monthlyDates, setMonthlyDates ] = useState(getMonthlyDates(changeMonth));
  const [ changeWeek, setChangeWeek ] = useState(0);
  const [ weeklyDates, setWeeklyDates] = useState(getWeeklyDates(changeWeek));
  
  useEffect(() => {
    setMonthlyDates(getMonthlyDates(changeMonth));
  }, [changeMonth]);

  useEffect(() => {
    setWeeklyDates(getWeeklyDates(changeWeek));
  }, [changeWeek]);

  const onClick = function (callback, status, change) {
    callback(status + change);
    console.log('click')
  };

  return (
    <Wrapper>
      <Header thisMonth={monthlyDates.title} />
      <Main>
        <SideBar 
          thisMonth={monthlyDates.thisMonth}
          dates={monthlyDates.monthlyDates}
          onClickPrevMonth={onClick.bind(null, setChangeMonth, changeMonth, -1)}
          onClickNextMonth={onClick.bind(null, setChangeMonth, changeMonth, 1)}
        />
        <CalendarContainer 
          weeklyDates={weeklyDates}
          onClickPrevWeek={onClick.bind(null, setChangeWeek, changeWeek, -1)}
          onClickNextWeek={onClick.bind(null, setChangeWeek, changeWeek, 1)}
        />
      </Main>
    </Wrapper>
  );
}

export default App;



// useEffect(() => {
//   saveSampleData();
// }, []);