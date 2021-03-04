import React, { useState, useEffect } from "react";
import styles from "./Day.module.css"
import Row from "../Row/Row";
import dayjs from "dayjs";


function Day() {
  // function handleClick(e) {
  //   console.log(e.target.dataset.id);
  //   //e.taget.parentElement.data-id => 시간, 시작 시간은 -1 로 자동 설정
  //   //e.target.data-id => 요일
  //   //state 업데이트
  //   //EventForm 열려야함
  // }
  //const { date, startTime, endTime} = eventInfo;

  const prevMonthSelector = "<";
  const nextMonthSelector = ">";

  const [dayjsDate, setDayjsDate] = useState(dayjs());
  const [date, setDate] = useState(dayjsDate.format("YYYY-MM-DD"));

  function goNextDay() {
    setDayjsDate(dayjsDate.add(1, "day"));
  }

  function goPrevDay() {
    setDayjsDate(dayjsDate.subtract(1, "day"));
  }

  useEffect(() => {
    setDate(dayjsDate.format("YYYY-MM-DD"));
  }, [dayjsDate]);

  return (
    <>  
      <button className="prev-month-selector" onClick={goPrevDay}>{prevMonthSelector}</button>
      <span className="current-month-selector">{date}</span>
      <button className="next-month-selector" onClick={goNextDay}>{nextMonthSelector}</button>
      <div className={styles.grid} data-id={date}>
        <Row currentDate={date}/>
      </div>
    </>
  );
}




// function mapDispatchToProps(dispatch) {
//   return {
//     addEvent: (yId) => dispatch(addEvent(null, yId))
//   }
// }

export default Day;