import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import styled from "styled-components";

import Auth from "../Auth/Auth";
import Header from "../Header/Header";
import Contents from "../Contents/Contents";
import Navigator from "../Navigator/Navigator";

import { saveSampleData, authService } from "../../utils/api";

function App() {
  console.log('who', authService.currentUser);
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
    <div className={styles.App}>
      <Header />
      <Auth />
      <Switch>
        <Route path='/' exact>
          <div>Main</div>
        </Route>
        <Route path='/event'>
          <div>Event</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
