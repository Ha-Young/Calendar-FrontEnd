import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../../containers/Main';
import Schedule from '../../containers/Schedule';
import { GlobalStyles } from '../styled';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path='/main'>
          <Main />
        </Route>
        <Route path='/event' exact>
          <Schedule />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
