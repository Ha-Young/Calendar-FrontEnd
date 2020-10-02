import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from 'containers/AppContainer';
import store from 'reducers/store';

render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>, document.getElementById('root')
);
