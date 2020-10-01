import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getMonthlyDates, { getWeeklyDates } from '../../utils/date';
import HeaderContainer from '../../containers/HeaderContainer';
import SideBar from '../Sidebar/SideBar';
import ScheduleContainer from '../../containers/ScheduleContainer';

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
  
  return (
    <Wrapper>  
      <HeaderContainer/>
      <Main>
        <SideBar/>
        <ScheduleContainer/>
      </Main>
    </Wrapper>
  );
}

export default App;


// import { saveSampleData } from '../../utils/api';
// useEffect(() => {
//   saveSampleData();
// }, []);