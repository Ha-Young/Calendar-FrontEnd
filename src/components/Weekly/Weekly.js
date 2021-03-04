import React, { Fragment } from "react";
import { days, hour } from "../../constants/DateConstants";
import Carousel from "../Carousel/Carousel";
import "./style.css";

export default function Weekly() {
  return (
    <Fragment>
      <div className="days">
        <div className="grid-container">
        {hour.map((time) => {
           return <div key={time} className="row">
             {days.map((day) => {
                return <div key={day} className="col">
                  {time===0 ? day: ""}
                  {day==="시간" && time ? time: ""}
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

// {days.map((day) => {
//   return <div key={day} className="day">
//     {day}
//     <div>{ }</div>
//   </div>
// })}
