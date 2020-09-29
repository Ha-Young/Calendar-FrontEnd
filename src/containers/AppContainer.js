import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styled from 'styled-components';

import Header from '../components/Header/Header';
import Calendar from '../components/Calendar/Calendar';
import Navigator from '../components/Navigator/Navigator';

import { saveSampleData, authService } from "../utils/api";

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: coral;
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
    <div>
      {/* <Auth /> */}
      <Header />
      <BodyWrapper>
        <Navigator />
        <Calendar />
      </BodyWrapper>
      <Switch>
        <Route path='/:mode' exact>
          <div></div>
        </Route>
        <Route path='/event'>
          <div>Event</div>
        </Route>
      </Switch>
    </div>
  );
}

export default AppContainer;
