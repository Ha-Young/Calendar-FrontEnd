import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CalendarLayout from './CalendarLayout';

Enzyme.configure({ adapter: new Adapter() });

// describe('CalendarLayout', () => {
//   it('should show layout', () => {
//     const wrapper = shallow(<CalendarLayout />);
//   })
// })