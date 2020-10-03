import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

const AllTheProviders = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>
        {children}
      </Provider>
    </Router>
  );
};

export const renderWithProviders =
  (component) => render(component, { wrapper: AllTheProviders });
