import React, { Fragment, useEffect } from "react";
import { hour} from "../../constants/DateConstants";
import "./style.css";
import { getFormat, parseDate } from "../../api/date";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { saveNewRecord } from "../../api";


export default function Daily({ eventList, eventKeyList, currentPageDate, handleClickLeft, handleClickRight }) {
  const currentDate = getFormat(currentPageDate);
  const parsedCurrentDate = parseDate(currentDate);
  const currentEventList = eventKeyList.includes(currentDate) ? eventList[currentDate] : [];
  let until;

  return (
    <Fragment>
      <div className="header">
          <AiOutlineArrowLeft className="previous" onClick={handleClickLeft}/>
          <span>{parsedCurrentDate.year}년</span>
          <span>{parsedCurrentDate.month}월</span>
          <span>{parsedCurrentDate.date}일</span>
          <AiOutlineArrowRight className="next" onClick={handleClickRight} />
      </div>
      <div className="daily">
       
        <div className="row-container">
        { 
          hour.map((time) => {
          let isColor = "";
          let title = "";

          for (let i = 0; i < currentEventList.length; i++) {
            const event = currentEventList[i];
            const start = parseInt(event.startHour);
            const end = parseInt(event.endHour);

            if (time === start) {
              until = end;
              title = event.title;
            }

            if (time <= until) {
              isColor = "colored";
            }
          }

          return (
            <div key={time} className={["time-div", isColor].join(" ")}>
              <div className="event-hour">{time}시</div>
              <div className="event-title">{title}</div>
            </div>
          );
          })
        }
        </div>
      </div>
    </Fragment>
  );
        
}
