import React from 'react';
import { renderWithProviders } from '../../utils/test-utils';
import EventCell from './EventCell';

test('renders correspond input value', () => {
  const EVENT = {
    id: '1234',
    top: 20,
    height: 100,
    title: 'Eat Pizza'
  };

  const {
    getByText,
    container,
    unmount
  } = renderWithProviders(<EventCell event={EVENT} />);

  expect(getByText('Eat Pizza')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <a
      class="EventCell"
      href="/event/1234"
      style="top: 20px; height: 100px;"
    >
      Eat Pizza
    </a>
  `);

  unmount();
});
