import React, { Fragment, useState } from "react";
import { hour} from "../../constants/DateConstants";
import { getFormat } from "../../api/date";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

export default function Daily({ eventList, eventKeyList, currentPageDate, handleClickLeft, handleClickRight }) {
  const [selectedEvent, setSelectedEvent] = useState({});
  const currentDate = getFormat(currentPageDate);
  const currentEventList = eventKeyList.includes(currentDate) ? eventList[currentDate] : [];
  let until;
  let firstKey;

  function handleClick(event) {
    const selectedHour = event.target.className.split(" ")[0];
    
    for (let i = 0; i < currentEventList.length; i++) {
      console.log(currentEventList[i].startHour, selectedHour);
      if (currentEventList[i].startHour === selectedHour) {
        setSelectedEvent(currentEventList[i]);
        break;
      }
    }
  }

  return (
    <Fragment>
      <div className="daily">
        <div className="header">
          <AiOutlineArrowLeft className="previous" onClick={() => {handleClickLeft(-1)}}/>
          {getFormat(currentPageDate)}
          <AiOutlineArrowRight className="next" onClick={() => {handleClickRight(1)}} />
        </div>
        <div className="row-container">
          {hour.map((time) => {
            let isColor = "";
            let title = "";

            for (let i = 0; i < currentEventList.length; i++) {
              const event = currentEventList[i];
              const start = parseInt(event.startHour);
              const end = parseInt(event.endHour);

              if (time === start) {
                until = end;
                title = event.title;
                firstKey = start;
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
