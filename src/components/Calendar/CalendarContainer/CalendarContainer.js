import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import styles from './CalendarContainer.module.css';
import { Route, Switch } from 'react-router-dom'
import CalendarDateBar from '../CalendarDateBar/CalendarDateBar';
import CalendarTimeline from '../CalendarTimeline/CalendarTimeline';
import CalendarSchedule from '../CalendarSchedule/CalendarSchedule';
import CalendarEvent from '../CalendarEvent/CalendarEvent';
import { getWeeklyDates } from '../../../utils/dates';

const Wrapper = styled.div`
  display:grid;
  grid-template-rows: 10% 1fr;
  border: 3px solid red;
  overflow: hidden;
`;



export default function CalendarContainer ({ weeklyDates, onClickPrevWeek, onClickNextWeek }) {
console.log(weeklyDates)
// const [scrollRef, setScrollRef] = useState(useRef());

// useEffect (()=>{
//   scrollRef.current.addEventListener('scroll', () => {
//     console.log(1)
//   })
// }, [scrollRef]);

return (
  <Wrapper>
    <CalendarDateBar
      type="weekly"
      dates={weeklyDates.weeklyDates}
      onClickPrevWeek={onClickPrevWeek}
      onClickNextWeek={onClickNextWeek}
    />
    <CalendarTimeline type="weekly" />


    //type을 내리는게 아니고 app레벨에서 오늘의 날짜를 받아서 믿으로 내려주고
    // 버튼이 눌리면 날짜가 하나 변경 되어서 그걸 다시 내려주고 리 렌더 하는 형식으로
    // 그리고 나중에 리덕스로 교체
    <CalendarDateBar 
      type="daily"
      dates={weeklyDates.weeklyDates}
      onClickPrevWeek={onClickPrevWeek}
      onClickNextWeek={onClickNextWeek}
    />
    <CalendarTimeline type="daily" />
      
    
    

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



