import React, { useState, useRef, useEffect } from 'react';
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

const MainDay = styled.div`
  display:grid;
  grid-template-columns: 40% 1fr;
  overflow: hidden;
`;

export default function CalendarContainer () {

const [scrollRef, setScrollRef] = useState(useRef());

useEffect (()=>{
  scrollRef.current.addEventListener('scroll', () => {
    console.log(1)
  })
}, [scrollRef]);



return (
  <Wrapper>
    <Route path="/" exact>
      <CalendarDateBar />
      <MainDay>
        <div 
          className={styles.withoutModal}
          onScroll={()=>{console.log(1)}}
          ref={scrollRef}
        >
          <CalendarTimeline />
        </div>
        <CalendarSchedule />
      </MainDay>
    </Route>
    
    
    
    
    
    
    <Route path="/weekly" exact>
      <CalendarDateBar />
      <div 
        className={styles.withoutModal}
        onScroll={()=>{console.log(1)}}
        ref={scrollRef}
      >
        <CalendarTimeline />
      </div>
    </Route>

  </Wrapper>
);
}



