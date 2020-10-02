import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ScheduleBody from './ScheduleBody';

Enzyme.configure({ adapter: new Adapter() });

describe('<ScheduleBody/>', () => {
  it('should properly render', () => {
    const Wrapper = shallow(<ScheduleBody/>);
    expect(Wrapper.length).toBe(1);
  });
});

describe('<ScheduleBody/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<ScheduleBody/>);
    expect(wrapper).toMatchSnapshot();
  });
});