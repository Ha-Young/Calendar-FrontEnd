import React, { Fragment, useEffect } from "react";
import Carousel from "../../containers/Carousel";
import { hour} from "../../constants/DateConstants";
import { getFormat } from "../../api/date";
import { getRecord } from "../../api";
import "./style.css";

export default function Daily({ currentPageDate, events, saveDataToReduxState }) {
  let until;

  useEffect(()=>{
    (async function () {
      const data = await getRecord(getFormat(currentPageDate));
      let copied =[];

      for (let key in data) {
        let event = {startHour: key};
        let eventID = data[key][Object.keys(data[key])[0]];

        for (let second in eventID) {
          event[second] =eventID[second];
        }
        copied.push(event);
      }
      saveDataToReduxState(copied);
    })();
  }, [currentPageDate]);

  return (
    <Fragment>
      <div className="daily">
        <Carousel />
        <div className="row-container">
        { 
          hour.map((time) => {
          let isColor = "";
          let title = "";

          for(let i = 0; i < events.length; i++) {
            const start = parseInt(events[i].startHour);
            const end = start + parseInt(events[i].duration);

            if (time === start) {
              until = end;
              title = events[i].title;
            } 

            if (time <= until) {
              isColor = "colored";
            }
          }

          return (
            <div key={time} className={["time-div", isColor].join(" ")}>
              <div className="event-hour">{time}시</div>
              <span className="event-title">{title}</span>
            </div>
          );
          })
        }
        </div>
      </div>
    </Fragment>
  );
        
}
