import React, { useEffect } from 'react';
import styled from 'styled-components';
import SideBar from '../Sidebar/SideBar';
import HeaderContainer from '../../containers/HeaderContainer';
import ScheduleContainer from '../../containers/ScheduleContainer';
import { saveSampleData } from '../../utils/api';

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 15% 1fr;
  padding-bottom: 50px;
`;

const Main = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 20% 1fr;
`;

function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

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
