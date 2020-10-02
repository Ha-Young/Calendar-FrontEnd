import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act, isElement, isElementOfType, componentClass } from 'react-dom/test-utils';
import CreateEvent from './CreateEvent';

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
    ReactDOM.render(<CreateEvent />, container);
  });
  const title = document.querySelector('h1');
  expect(title.textContent).toBe('CreateEvent');
});

it('is a element', () => {
  const CreateEvent = isElement(<CreateEvent/>);
  expect(CreateEvent).toBe(true);
});

it('is a componentClass?', () => {
  const CreateEvent = isElementOfType(<CreateEvent/>, componentClass);
  expect(CreateEvent).toBe(false);
});
