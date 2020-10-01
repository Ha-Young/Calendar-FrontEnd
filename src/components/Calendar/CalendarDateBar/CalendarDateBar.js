import React from 'react';
import styled from 'styled-components';
import ArrowShapedButton from '../../Shared/Button/ArrowShapedButton/ArrowShapedButton';
import MonthlyCalendarBody from '../../SideBar/MonthlyCalendar/MonthlyCalendarBody/MonthlyCalendarBody';
import MonthlyCalendarWeek from '../../SideBar/MonthlyCalendar/MonthlyCalendarWeek/MonthlyCalendarWeek.js';

const Wrapper = styled.div`
  display: grid;
  
`;

export default function CalendarDateBar ({ type, dates, onClickPrevWeek, onClickNextWeek }) {
  
  function renderByType () {
    if (type === 'weekly') {
      return (
        <Wrapper style={{gridTemplateColumns:"8% 1fr 7%"}}>
          <ArrowShapedButton
            css={{margin: "25px 0 0 25px", width: "10px", height: "10px"}} 
            direction="left" 
            onClick={onClickPrevWeek}
          />
          <MonthlyCalendarBody type={type} dates={dates} />
          <ArrowShapedButton
            css={{margin: "24px 0 0 15px", width: "10px", height: "10px"}} 
            direction="right"
            onClick={onClickNextWeek}
          />
        </Wrapper>
      );
    } 

    return (
      <Wrapper style={{gridTemplateColumns:"1fr"}}>
        <MonthlyCalendarBody type={type} dates={dates} />
      </Wrapper>
    );
  }

  return renderByType();
  
}


{/* 
<Daily>
    <Wrapper>
      <C1>
      <div>1</div>
      <Day>
        <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        <div>일</div>
      </Day>
      <div>3</div>
      </C1>
      <C1>
      <div style={{border:"1px solid black"}}>버튼</div>
      <Day style={{paddingTop:"10px"}}>
      
        <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
        <div>17</div>
      </Day>
      <div style={{border:"1px solid black"}}>버튼</div>
      </C1>
    </Wrapper>

    </Daily>
    </> */}



  
{/* <Weekly>
    <Wrapper>
      <C1>
      <div>1</div>
      <Day>
        <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        <div>일</div>
      </Day>
      <div>3</div>
      </C1>
      <C1>
      <div style={{border:"1px solid black"}}>버튼</div>
      <Day style={{paddingTop:"10px"}}>
      
        <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
        <div>17</div>
      </Day>
      <div style={{border:"1px solid black"}}>버튼</div>
      </C1>
    </Wrapper>
    </Weekly> */}