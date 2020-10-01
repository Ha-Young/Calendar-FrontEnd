import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from './App.module.css';
import { GlobalStyles } from '../styled';

import Header from '../Header/Header';
import Main from '../Main';
import Schedule from '../Schedule';

import { saveSampleData } from '../../utils/api';

// Feel free to modify as you need.
function App() {
  useEffect(() => {
    saveSampleData();
  }, []);

  return (
    <div className={styles.App}>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path={[ '/main', '/main/:params' ]}>
          <Main />
        </Route>
        <Route path='/event'>
          <Schedule />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
