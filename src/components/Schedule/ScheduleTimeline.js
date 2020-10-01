import React, {useEffect, useState, useRef} from 'react';
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components';
import CalendarTimelineSchedule from '../CalendarTimelineSchedule/CalenderTimelineSchedule';
import CalendarTimelineTime from '../CalendarTimelineTime/CalendarTimelineTime';

const Weekly = styled.div`
`;

const Daily = styled.div`
`;



const TimeWeek = styled.div`
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  align-items: center;
`;





// const SchedulesWeek = styled.div`
//   padding-top: 10px;
//   display: grid;
//   grid-auto-rows: minmax(100px, auto);
//   align-items: space-between;
// `;

const SchedulesDay = styled.div`
  padding-top: 10px;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  align-items: space-between;
`;




// const Hour = styled.div`
//   text-align: center;
//   margin-bottom: 120px;
// `;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  justify-content: center;
`;



const Wrapper = styled.div`
  display: grid;
  border: 3px solid blue;
  overflow: scroll;
`;  

// const TimeDay = styled.div`
//   display: grid;
//   grid-auto-rows: minmax(100px, auto);
//   align-items: center;
// `;


export default function ScheduleTimeline ({ type, openModal }) { //CalendarTimeline
  const [scrollRef, setScrollRef] = useState(useRef());

  let match = useRouteMatch()
  console.log(match, 'mat')

  
  useEffect (()=>{
    scrollRef.current.addEventListener('scroll', () => {
      console.log(1)
    })
  }, [scrollRef]);

  function renderByType () {
    if (type === 'weekly') {
      return (
        <Wrapper ref={scrollRef} style={{gridTemplateColumns:"8% 1fr 6.8%"}}>
          <CalendarTimelineTime />
          <CalendarTimelineSchedule type={type} openModal={openModal}/>
          <div></div>
        </Wrapper>
      );    
    }

    return (
      <Wrapper ref={scrollRef} style={{gridTemplateColumns:"15% 1fr"}}>
        <CalendarTimelineTime />
        <CalendarTimelineSchedule type={type} openModal={openModal}/>
      </Wrapper>
    );
  }

  return renderByType();
}



{/* <Daily>
<Wrapper>
  <TimeDay>
    <Hour>12am</Hour>
    <Hour>1am</Hour>
    <Hour>2am</Hour>
    <Hour>3am</Hour>
    <Hour>4am</Hour>
    <Hour>5am</Hour>
    <Hour>6am</Hour>
    <Hour>7am</Hour>
    <Hour>8am</Hour>
    <Hour>9am</Hour>
    <Hour>10am</Hour>
    <Hour>11am</Hour>
    <Hour>12pm</Hour>
    <Hour>1pm</Hour>
    <Hour>2am</Hour>
    <Hour>3am</Hour>
    <Hour>4am</Hour>
    <Hour>5am</Hour>
    <Hour>6am</Hour>
    <Hour>7am</Hour>
    <Hour>8am</Hour>
    <Hour>9am</Hour>
    <Hour>10am</Hour>
    <Hour>11am</Hour>
    <Hour>12am</Hour>
    <Hour>1am</Hour>
  </TimeDay>
  <SchedulesDay>
    <div>24</div>
    <Days> </Days>
    <div style={{border:"1px solid black"}}>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
    <div>19</div>
    <div>20</div>
    <div>21</div>
    <div style={{border:"1px solid black"}}>22</div>
    <div style={{border:"1px solid black"}}>23</div>
    <div style={{border:"1px solid black"}}>24</div>
    <div>1</div>
  </SchedulesDay>
  <div>100</div>
</Wrapper>
</Daily> */}









{/* <Weekly>
    <Wrapper>
      <TimeWeek>
        <Hour>12am</Hour>
        <Hour>1am</Hour>
        <Hour>2am</Hour>
        <Hour>3am</Hour>
        <Hour>4am</Hour>
        <Hour>5am</Hour>
        <Hour>6am</Hour>
        <Hour>7am</Hour>
        <Hour>8am</Hour>
        <Hour>9am</Hour>
        <Hour>10am</Hour>
        <Hour>11am</Hour>
        <Hour>12pm</Hour>
        <Hour>1pm</Hour>
        <Hour>2am</Hour>
        <Hour>3am</Hour>
        <Hour>4am</Hour>
        <Hour>5am</Hour>
        <Hour>6am</Hour>
        <Hour>7am</Hour>
        <Hour>8am</Hour>
        <Hour>9am</Hour>
        <Hour>10am</Hour>
        <Hour>11am</Hour>
        <Hour>12am</Hour>
        <Hour>1am</Hour>
      </TimeWeek>
      <SchedulesWeek>
        <div>24</div>
        <Days>
          <div style={{border:"1px solid black"}}>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
          <div>일</div>
        </Days>
        <div style={{border:"1px solid black"}}>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div style={{border:"1px solid black"}}>22</div>
        <div style={{border:"1px solid black"}}>23</div>
        <div style={{border:"1px solid black"}}>24</div>
        <div>1</div>
      </SchedulesWeek>
      <div>100</div>
    </Wrapper>
  </Weekly> */}