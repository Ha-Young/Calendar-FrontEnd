import React, { Fragment } from "react";
import moment from 'moment';
import DateSelector from "../DateSelector/DateSelector";
import { days } from "../../constants/DateConstants";
import "./style.css";

export default function Weekly() {

  return (
    <Fragment>
      <DateSelector />
      <div className="days">
        {days.map((day) => {
          return <div key={day} className="day">
            {day}
            <div>{ }</div>
          </div>
        })}
      </div>
    </Fragment>
  );
}
