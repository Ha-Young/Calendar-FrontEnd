import React from 'react';
import styled from 'styled-components';
import Button from '../Shared/Button';
import CalendarContainer from '../../containers/CalendarContainer';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5% 40% 1fr;
  padding-top: 20px;
`;

export default function SideBar () {
    
  return (
    <Wrapper>
      <div className='sidebar_button'>
          <Link to='/' exact><Button>daily</Button></Link>
          <Link to='/weekly' exact><Button>weekly</Button></Link>
      </div>
      <CalendarContainer />
      <div></div>
    </Wrapper>
  );
}
