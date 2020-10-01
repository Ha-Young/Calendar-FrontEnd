import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getMonthlyDates, { getWeeklyDates } from '../../utils/date';
import HeaderContainer from '../../containers/HeaderContainer';
import SideBar from '../Sidebar/SideBar';
import Schedule from '../Schedule/Schedule';

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
  const [ openModal, setOpenModal ] = useState(false);
  
  useEffect(() => {
    setMonthlyDates(getMonthlyDates(changeMonth));
  }, [changeMonth]);

  useEffect(() => {
    setWeeklyDates(getWeeklyDates(changeWeek));
  }, [changeWeek]);

  function onClick (callback, status, change) {
    callback(status + change);
    console.log('click')
  };

  function createNewSchedule () {
    console.log('modal')
  }

  return (
    <Wrapper>  

      <HeaderContainer/>
      <Main>
        <SideBar/>
        <Schedule 
          weeklyDates={weeklyDates}
          onClickPrevWeek={onClick.bind(null, setChangeWeek, changeWeek, -1)}
          onClickNextWeek={onClick.bind(null, setChangeWeek, changeWeek, 1)}
          openModal={createNewSchedule}
        />
      </Main>
    </Wrapper>
  );
}

export default App;


// import { saveSampleData } from '../../utils/api';
// useEffect(() => {
//   saveSampleData();
// }, []);