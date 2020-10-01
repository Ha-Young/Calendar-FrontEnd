import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from './CalendarContainer.module.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import CalendarDateBar from '../CalendarDateBar/CalendarDateBar';
import CalendarTimeline from '../CalendarTimeline/CalendarTimeline';
import CreateSchedule from '../createSchedule/createSchedule';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import { getWeeklyDates } from '../../../utils/dates';
import CalendarTimelineSchedule from '../CalendarTimelineSchedule/CalenderTimelineSchedule';
import Modal from '../../Shared/Modal/Modal.js';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 35% 1fr;
  overflow: hidden;
`;

export default function Schedule ({ weeklyDates, onClickPrevWeek, onClickNextWeek, openModal }) { //CalendarContainer
  
  return (
    <Switch>
  <Route path='/' exact>
    <Wrapper>
        <CalendarDateBar 
          type='daily'
          dates={weeklyDates.weeklyDates}
          onClickPrevWeek={onClickPrevWeek}
          onClickNextWeek={onClickNextWeek}
        />
        <CalendarTimeline type='daily' openModal={openModal} />    
    </Wrapper>
  </Route>

   <Route path='/weekly'>
      <Wrapper>
         <CalendarDateBar
          type='weekly'
          dates={weeklyDates.weeklyDates}
          onClickPrevWeek={onClickPrevWeek}
          onClickNextWeek={onClickNextWeek}
        />
        <CalendarTimeline type='weekly' openModal={openModal}/>
        </Wrapper>
    </Route>
    </Switch>
      
      
      

      // <Route path='/daily/event'></Route>
      // <Route path='/daily/event'></Route>


    
    
  );
}

{/* <Route path='event/new'>
      <CreateSchedule />
    </Route>
    <Route path='event/:event_id'>
      
    </Route> */}




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



