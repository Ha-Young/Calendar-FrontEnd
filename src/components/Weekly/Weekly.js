import React, { Fragment, useEffect } from "react";
import { getFormat, convertToReduxStateForm, parseDate } from "../../api/date";
import { days, hour } from "../../constants/DateConstants";
import { getRecord } from "../../api";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./style.css";

export default function Weekly({ currentPageDate, events, handleClickLeft, handleClickRight, saveDataToReduxState }) {
  const currentDay = currentPageDate;
  const currentYear = currentDay.getFullYear();
  const currentMonth = currentDay.getMonth();
  const currentDate = currentDay.getDate();
  const CurrentDayOfWeek = currentDay.getDay();
  const currentWeek = [-1];
  const currentWeekDate = [];
  let i = 0;

  for (let i = 0; i < 7; i++) {
    const day = new Date(currentYear, currentMonth, currentDate + (i - CurrentDayOfWeek));
    const date = day.getDate();

    currentWeekDate[i] = day;
    currentWeek[i] = date;
  }

  useEffect(() => {
    (async function(){
      const dates = await Promise.all(currentWeekDate.map((currentDate) => getRecord(getFormat(currentDate))));
      const filteredDates = [];

      for (let i = 0; i < 7; i++) {
        if (dates[i]) {
          const currentStateEvent = {...dates[i], date: parseDate(getFormat(currentWeekDate[i]))}
          filteredDates.push(currentStateEvent);
        }
      }

      convertToReduxStateForm(filteredDates);

    })();
  }, [currentPageDate]);

  return (
    <Fragment>
      <div className="days">
        <div className="header">
          <AiOutlineArrowLeft className="previous" onClick={handleClickLeft} />
          <span>{getFormat(currentPageDate)}</span>
          <AiOutlineArrowRight className="next" onClick={handleClickRight} />
        </div>
        <div className="grid-container">
        <div className="row week-header">
          {days.map((day) => {
            return (
              <div className="col">
                <div>{day}</div>
                <div>{day !=="시" && currentWeek[i++]}</div>
              </div>
            );
          })}
        </div>
        {hour.map((time) => {
           return <div key={time} className="row">
             {days.map((day) => {
                return <div key={day} className="col">
                  

                </div>
              })
             }
           </div>
          })
        }
        </div>
      </div>
    </Fragment>
  );
}

