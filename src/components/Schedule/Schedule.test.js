import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Schedule from './Schedule';

Enzyme.configure({ adapter: new Adapter() });

describe.skip('ScheduleLayout', () => {
  it('should show layout', () => {
    const wrapper = shallow(<Schedule/>);
  });
});
