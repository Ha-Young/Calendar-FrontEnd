import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import store from './store';
import AppContainer from './container/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppContainer />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
