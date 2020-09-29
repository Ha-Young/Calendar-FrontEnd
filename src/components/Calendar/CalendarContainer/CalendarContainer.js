import React from 'react';
import styled from 'styled-components';
import styles from './CalendarContainer.module.css';
import { Route, Switch } from 'react-router-dom'
import CalendarDateBar from '../CalendarDateBar/CalendarDateBar';
import CalendarTimeline from '../CalendarTimeline/CalendarTimeline';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule';
import CalendarEvent from '../CalendarEvent/CalendarEvent';

const Wrapper = styled.div`
  display:grid;
  grid-template-rows: 20% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;



export default function CalendarContainer () {


return (
  <Wrapper>
    <Route path="/" exact>
      <CalendarDateBar />
      <div 
        className={styles.withoutModal}
        onScroll={()=>{console.log(1)}}  
      >
        <CalendarTimeline />
      </div>
    </Route>

  </Wrapper>
);
}



