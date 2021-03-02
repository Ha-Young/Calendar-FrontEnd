import React, { Fragment } from "react";
import DateSelector from "../DateSelector/DateSelector";
import "./style.css";

export default function Daily() {
  const morning = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const afternoon = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <Fragment>
      <DateSelector />
      <div className="daily">
        {morning.map((time) => {
          return <div key={time} className="time-div">오전 {time}시</div>
        })}
        <div key={12} className="time-div">정오</div>
        {afternoon.map((time) => {
          return <div key={time} className="time-div">오후 {time}시</div>
        })}
      </div>
    </Fragment>
  );
}
