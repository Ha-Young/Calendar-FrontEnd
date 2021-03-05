import React, { Fragment, useState } from "react";
import { hour} from "../../constants/DateConstants";
import { getFormat, parseDate } from "../../api/date";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Modal from "../Modal/Modal";
import "./style.css";


export default function Daily({ eventList, eventKeyList, currentPageDate, handleClickLeft, handleClickRight }) {
  const [IsModalShown, setIsModalShown] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const currentDate = getFormat(currentPageDate);
  const parsedCurrentDate = parseDate(currentDate);
  const currentEventList = eventKeyList.includes(currentDate) ? eventList[currentDate] : [];
  let until;
  let firstKey;

  function handleClick(event) {
    setIsModalShown(true);
    const selectedHour = event.target.className.split(" ")[0];
    
    console.log(selectedHour);
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
      {IsModalShown && 
        <Modal 
        selected={selectedEvent}
        setIsModalShown={setIsModalShown}
        />
      }
      <div className="header">
          <AiOutlineArrowLeft className="previous" onClick={() => {handleClickLeft(-1)}}/>
          <span>{parsedCurrentDate.year}년</span>
          <span>{parsedCurrentDate.month}월</span>
          <span>{parsedCurrentDate.date}일</span>
          <AiOutlineArrowRight className="next" onClick={() => {handleClickRight(1)}} />
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
              firstKey = start;
            }

            if (time <= until) {
              isColor = "colored";
            }
          }

          return (
            <div key={time} className={[firstKey, "time-div", isColor].join(" ")} onClick={isColor ? handleClick : null}>
              {time}시
              <div className={[firstKey, "event-title"].join(" ")}>{title}</div>
            </div>
          );
          })
        }
        </div>
      </div>
    </Fragment>
  );
        
}
