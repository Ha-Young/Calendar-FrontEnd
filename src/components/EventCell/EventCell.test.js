import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import EventCell from './EventCell';

test('renders correspond value', () => {
  const EVENT = {
    id: '1234',
    top: 20,
    height: 100,
    title: 'Eat Pizza'
  };

  const eventCell = render(<Router><EventCell event={EVENT} /></Router>);
});
