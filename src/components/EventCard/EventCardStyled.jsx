import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import routes from "constants/routes";
import {
  generateColor,
  getWeeklyPosition,
  getDailyPosition,
} from "utils/utilFunction";

const EventCardStyled = ({ id, title, date, startTime, endTime }) => {
  const history = useHistory();
  const [cardStyle, setCardStyle] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    let sizeAndPosition = {};

    if (pathname === routes.WEEKLY) {
      sizeAndPosition = { ...getWeeklyPosition(startTime, endTime, date) };
    } else if (pathname === routes.DAILY) {
      sizeAndPosition = { ...getDailyPosition(startTime, endTime) };
    }

    const cardStyle = {
      position: "absolute",
      top: `${sizeAndPosition.positionTop}px`,
      left: `${sizeAndPosition.positionLeft}px`,
      width: `${sizeAndPosition.cardWidth}px`,
      height: `${sizeAndPosition.cardHeight}px`,
      backgroundColor: generateColor(),
      opacity: 0.9,
      padding: "4px",
      fontSize: "0.8em",
      color: "white",
      cursor: "pointer",
    };

    setCardStyle(cardStyle);
  }, [pathname, date, startTime, endTime]);

  return (
    <div style={cardStyle} onClick={() => history.push(`/events/${id}`)}>
      <h1>{title}</h1>
      <span>
        {startTime}시 ~ {endTime}시
      </span>
    </div>
  );
};

export default EventCardStyled;
