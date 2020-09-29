import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act, isElement, isElementOfType, componentClass } from 'react-dom/test-utils';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule.js';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('can render', () => {
  act(() => {
    ReactDOM.render(<CalendarSchedule />, container);
  });
  const title = document.querySelector('h1');
  expect(title.textContent).toBe('CalendarSchedule');
});

it('is a element', () => {
  const calendarSchedule = isElement(<CalendarSchedule/>);
  expect(calendarSchedule).toBe(true);
});

it('is a componentClass?', () => {
  const calendarSchedule = isElementOfType(<CalendarSchedule/>, componentClass);
  expect(calendarSchedule).toBe(false);
});
