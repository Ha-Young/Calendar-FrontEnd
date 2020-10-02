import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ScheduleHead from './ScheduleHead';

test.skip('renders a message', () => {
  const { container, getByText } = render(<ScheduleHead/>);
  expect(getByText('CalendarDateBar')).toBeInTheDocument();
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class='sc-bdnylx eIuMNv'
    >
      <h1>
        CalendarDateBar
      </h1>
    </div>
  `);
});
