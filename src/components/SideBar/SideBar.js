import React from 'react';
import styled from "styled-components";
import MonthlyCalendar from '../Calendar/MonthlyCalendar/MonthlyCalendar.js';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 5% 40% 1fr;
  padding-top: 20px;
`;

export default function SideBar () {

  return (
    <Wrapper>
      <div className='sidebar_button'>
          <button>daily</button>
          <button>weekly</button>
        </div>
      <MonthlyCalendar></MonthlyCalendar>
      <div></div>
    </Wrapper>
  );
}





// <Wrapper style={{border: "3px solid yellow"}}>
//       <div>
//         <button>daily</button>
//         <button>weekly</button>
//       </div>
//       <Monthly style={{border: "3px solid yellowgreen"}}>
//         <Month style={{border: "3px solid green"}}>
//           <div>september</div>
//           <button>1</button>
//           <button>2</button>
//         </Month>
//         <Dates>
//           <Weeks style={{border: "3px solid tomato"}}> {/*1번 행 */}
//             <EveryDay>월</EveryDay>
//             <EveryDay>화</EveryDay>
//             <EveryDay>수</EveryDay>
//             <EveryDay>목</EveryDay>
//             <EveryDay>금</EveryDay>
//             <EveryDay>토</EveryDay>
//             <EveryDay>일</EveryDay>
//           </Weeks>
//           <Weeks className="1주"></Weeks>
//           <Weeks className="1주"></Weeks>
//           <Weeks className="1주"></Weeks>
//           <Weeks className="1주"></Weeks>
//           <Weeks className="1주"></Weeks>
//           <Weeks className="1주"></Weeks>
//         </Dates>
//       </Monthly>
//       <div>3</div>
//     </Wrapper>