import React from 'react';
import { mount } from 'enzyme';

import Button from '../components/Button';

let Wrapper;
const TEST_VALUE = 'test-value';
const fn = jest.fn();

beforeEach(() => {
  Wrapper = mount(<Button value={TEST_VALUE} onClick={fn}/>);
});

afterEach(() => {
  Wrapper.unmount();
  fn.mockClear();
});

describe('Button component test', () => {
  test('Button should have value', () => {
    expect(Wrapper.text()).toEqual(TEST_VALUE);
  });

  test('Button should have onClick function', () => {
    Wrapper.find('button').simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });
});
