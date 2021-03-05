import React, { Fragment } from "react";
import { getFormat } from "../../api/date";
import { days, hour } from "../../constants/DateConstants";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./style.css";

export default function Weekly({ events, keys, currentPageDate, handleClickLeft, handleClickRight }) {
  const currentDay = currentPageDate;
  const currentYear = currentDay.getFullYear();
  const currentMonth = currentDay.getMonth();
  const currentDate = currentDay.getDate();
  const CurrentDayOfWeek = currentDay.getDay();
  const currentWeek = [-1];
  const currentWeekKey = [];
  let i = 0;

  for (let i = 0; i < 7; i++) {
    const day = new Date(currentYear, currentMonth, currentDate + (i - CurrentDayOfWeek));
    const date = day.getDate();

    currentWeek[i] = date;
    currentWeekKey[i] = getFormat(day);
  }

  return (
    <Fragment>
      <div className="days">
        <div className="header">
          <AiOutlineArrowLeft className="previous" onClick={() => {handleClickLeft(-7)}} />
          <span>{getFormat(currentPageDate)}</span>
          <AiOutlineArrowRight className="next" onClick={() => {handleClickRight(7)}} />
        </div>
       
        <div className="grid-container">
          <div className="time-col">
            {hour.map((hour) => {
              return (<div className="time-box">{hour}</div>);
            })}
          </div>
          <div className="row week-header">
            {days.map((day) => {
              return (
                <div key ={day} className="col">
                  <div>{day}</div>
                  <div>{day !=="시" && currentWeek[i++]}</div>
                </div>
              );
            })}
          </div>
          <div className="vertical-container">
            {currentWeekKey.map((key) => {
              const currentEventList = keys.includes(key) ? events[key] : [];
              let until;

              return (
                <div className="vertical">
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
                    }

                    if (time <= until) {
                      isColor = "box-colored";
                    }
                  }

                  return <div className={["box", isColor].join(" ")}>{title}</div>
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
