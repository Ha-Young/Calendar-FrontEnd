import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import SideBar from '../../Sidebar/SideBar'
import HeaderContainer from '../../../containers/HeaderContainer';
import ScheduleContainer from '../../../containers/ScheduleContainer';

describe('<APP/>', () => {
  it('render components without crashing', () => {
    const wrapper = shallow(<App/>);
    
    expect(wrapper.find(SideBar).length).toEqual(1);
    expect(wrapper.find(HeaderContainer).length).toEqual(1);
    expect(wrapper.find(ScheduleContainer).length).toEqual(1);
  });

});
