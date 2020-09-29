import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalendarTimeline from './CalendarTimeline';

Enzyme.configure({ adapter: new Adapter() });

describe('<CalendarTimeline />', () => {
  it('should properly render', () => {
    const Wrapper = shallow(<CalendarTimeline />);
    expect(Wrapper.length).toBe(1);
  });
});

describe('<CalendarTimeline />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<CalendarTimeline />);
    expect(wrapper).toMatchSnapshot();
  });
});