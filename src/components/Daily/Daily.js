import React, { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getFormat } from "../../api/date";
import { hour} from "../../constants/DateConstants";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

export default function Daily({ eventList, eventKeyList, currentPageDate, handleClickLeft, handleClickRight, handleClickEvent }) {
  const currentDate = getFormat(currentPageDate);
  const currentEventList = eventKeyList.includes(currentDate) ? eventList[currentDate] : [];
  const match = useRouteMatch();
  let until;
  let firstId;

  function handleClick(event) {
    const className = event.target.className.split(" ");
    const selectedEventId = className.length === 3 ? className[0] : "";
    let selectedEvent;
    
    for (let i = 0; i < currentEventList.length; i++) {
      if (currentEventList[i].Id === selectedEventId) {
        selectedEvent = currentEventList[i];
        break;
      }
    }

    if(!selectedEvent) {
      return;
    }

    handleClickEvent(selectedEvent);
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
              const Id = event.Id;

              if (time === start) {
                until = end;
                title = event.title;
                firstId = Id;
              }

              if (time <= until) {
                isColor = "colored";
              } else {
                firstId = "";
              }
            }

            return (
              <Link to={firstId ? `/event/${firstId}` : `${match.url}`}>
                <div key={time} className={[firstId, "time-div", isColor].join(" ")} onClick={handleClick}>
                  <div className="disable-click event-title">{title}</div>
                  <div className="disable-click event-hour">{time}시</div>
                </div>
              </Link>
            );
          })
        }
        </div>
      </div>
    </Fragment>
  );      
}
