import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from './CalendarContainer.module.css';
import { Route, Switch } from 'react-router-dom'
import CalendarDateBar from '../CalendarDateBar/CalendarDateBar';
import CalendarTimeline from '../CalendarTimeline/CalendarTimeline';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import { getWeeklyDates } from '../../../utils/dates';
import CalendarTimelineSchedule from '../CalendarTimelineSchedule/CalenderTimelineSchedule';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 40% 1fr;
  overflow: hidden;
`;

export default function CalendarContainer ({ weeklyDates, onClickPrevWeek, onClickNextWeek }) {
  
return (
  <Wrapper>
      <Route path="/weekly">
      <CalendarDateBar
        type="weekly"
        dates={weeklyDates.weeklyDates}
        onClickPrevWeek={onClickPrevWeek}
        onClickNextWeek={onClickNextWeek}
      />
      <CalendarTimeline type="weekly" />
    </Route>

    <Route path="/" exact>
    <CalendarDateBar 
        type="daily"
        dates={weeklyDates.weeklyDates}
        onClickPrevWeek={onClickPrevWeek}
        onClickNextWeek={onClickNextWeek}
      />
      <Main>
        <CalendarTimeline type="daily" />
        <CalendarSchedule />
      </Main>
    </Route>
  </Wrapper>
);
}




// <Route path="/" exact>
//       <CalendarDateBar />
//       <MainDay>
//         <div 
//           className={styles.withoutModal}
//           onScroll={()=>{console.log(1)}}
//           ref={scrollRef}
//         >
//           <CalendarTimeline />
//         </div>
//         <CalendarSchedule />
//       </MainDay>
//     </Route>
    
    
    
    
    
    
//     <Route path="/weekly" exact>
//       <CalendarDateBar />
//       <div 
//         className={styles.withoutModal}
//         onScroll={()=>{console.log(1)}}
//         ref={scrollRef}
//       >
//         <CalendarTimeline />
//       </div>
//     </Route>



