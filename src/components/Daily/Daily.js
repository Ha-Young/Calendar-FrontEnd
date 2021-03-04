import React, { Fragment, useState } from "react";
import { getToday } from "../../api/date";
import Carousel from "../../containers/Carousel";
import { hour} from "../../constants/DateConstants";
import "./style.css";

export default function Daily({ events }) {
  return (
    <Fragment>
      <div className="daily">
        <Carousel />
        <div className="row-container">
          {hour.map((time) => {
            let isColor = "";
            for(let i = 0; i < events.length; i++) {
              const start = events[i].startHour;
              const end = events[i].endHour;
      
              if (time >= start && time <= end) {
                isColor = "colored";
              }
            }
            console.log(isColor);
            return <div key={time} className={["time-div", isColor].join(" ")}>{time}시</div>
          })}
        </div>
        <div>
        </div>
      </div>
    </Fragment>
  );
        
}
