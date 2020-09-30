import { getNodeText } from '@testing-library/react';
import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5% 40% 1fr;
  padding-top: 20px;
`;

const Monthly = styled.div`
  display: grid;
  grid-template-rows:15% 1fr;
`;

const Month = styled.div`
  display: grid;
  grid-template-columns: 1fr 10% 10%;
`;

const Dates = styled.div`
  display:grid;
  grid-template-rows: repeat(7, 1fr);
`;

const Weeks = styled.div`
  display:grid;
  grid-template-columns: repeat(7, 1fr);
`;



const EveryDay = styled.div`
`;

export default function SideBar () {

  function makeCalendar () {
    let today = new Date();
    let firstDay = new Date(today.getFullYear(), today.getMonth(),1);
    const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const notLeapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const defaultFirstDay = firstDay;
    let defaultYear;
    !(firstDay.getFullYear() % 4) ? defaultYear = leapYear : defaultYear = notLeapYear;
    

    let theFirstDay = new Date(today.getFullYear(), today.getMonth(),1);
    let theLastDay = new Date(today.getFullYear(), today.getMonth() + 1,0); 
    
    let result = [];
    let eachWeek = [];
    
    for (let i = 0; i < next; i++) {
        
      if (theFirstDay.getDay !== 0) {
        while (theFirstDay.getDay !== 0) {
          eachWeek.push(null);
          theFirstDay.getDay--;
        }
      }

      if (eachWeek.length < 7) {
        eachWeek.push(i);
      } else {
        result.push(eachWeek);
        eachWeek = [];
      }

//마지막께 꽉차지 않으면 널을 넣고싶다.
    }

  }

  makeCalendar()










  return (
    <Wrapper style={{border: "3px solid yellow"}}>
      <div>
        <button>daily</button>
        <button>weekly</button>
      </div>
      <Monthly style={{border: "3px solid yellowgreen"}}>
        <Month style={{border: "3px solid green"}}>
          <div>september</div>
          <button>1</button>
          <button>2</button>
        </Month>
        <Dates>
          <Weeks style={{border: "3px solid tomato"}}> {/*1번 행 */}
            <EveryDay>월</EveryDay>
            <EveryDay>화</EveryDay>
            <EveryDay>수</EveryDay>
            <EveryDay>목</EveryDay>
            <EveryDay>금</EveryDay>
            <EveryDay>토</EveryDay>
            <EveryDay>일</EveryDay>
          </Weeks>
          <Weeks className="1주"></Weeks>
          <Weeks className="1주"></Weeks>
          <Weeks className="1주"></Weeks>
          <Weeks className="1주"></Weeks>
          <Weeks className="1주"></Weeks>
          <Weeks className="1주"></Weeks>
        </Dates>
      </Monthly>
      <div>3</div>
    </Wrapper>
  );
}