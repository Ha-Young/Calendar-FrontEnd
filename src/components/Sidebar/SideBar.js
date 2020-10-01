import React from 'react';
import styled from 'styled-components';
import Calendar from '../Calendar/Calendar';
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5% 40% 1fr;
  padding-top: 20px;
`;

export default function SideBar ({ thisMonth, dates, onClickPrevMonth, onClickNextMonth }) {

  return (
    <Wrapper>
      <div className='sidebar_button'>
          <Link to='/' exact><button>daily</button></Link>
          <Link to='/weekly' exact><button>weekly</button></Link>
      </div>
      <Calendar
        thisMonth={thisMonth}
        dates={dates}
        onClickPrevMonth={onClickPrevMonth}
        onClickNextMonth={onClickNextMonth}
      />
      <div></div>
    </Wrapper>
  );
}
