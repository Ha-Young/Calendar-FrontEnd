import React, { Fragment } from "react";
import { getToday } from "../../api/date";
import Carousel from "../Carousel/Carousel";
import { hour} from "../../constants/DateConstants";
import "./style.css";

export default function Daily() {
  return (
    <Fragment>
      <div className="daily">
        <Carousel date={getToday()} />
        <div className="row-container">
          {hour.map((time) => {
            return <div key={time} className="time-div">{time}시</div>
          })}
        </div>
      </div>
    </Fragment>
  );
}
