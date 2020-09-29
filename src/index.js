import React from 'react'
import { render } from 'react-dom';
import Root from './components/Root/Root'
import store from 'reducers/store';

render(
  <Root store={store} />, document.getElementById('root')
);
