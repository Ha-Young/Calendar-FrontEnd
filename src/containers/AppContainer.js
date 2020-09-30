import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styled from 'styled-components';

import CalendarContainer from './CalendarContainer';
import DetailsContainer from './DetailsContainer';
import Header from '../components/Header/Header';

import { saveSampleData, authService } from "../utils/api";


const AppWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const BodyWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

function AppContainer() {

  // useEffect(() => {
  //   // (async function () {
  //   //   try {
  //   //     const data = await saveSampleData();
  //   //     // console.log(data);
  //   //   } catch (error) {
        
  //   //   } finally {

  //   //   }
  //   // })();
  // }, []);

  return (
    <AppWrapper>
      {/* <Auth /> */}
      <Header />
      <BodyWrapper>
        <CalendarContainer />
        <DetailsContainer />
      </BodyWrapper>

      <Switch>
        <Route path='/' exact>
          <div></div>
        </Route>
        <Route path='/:mode' exact>
          <div></div>
        </Route>
        <Route path='/event'>
          <div>Event</div>
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default AppContainer;
