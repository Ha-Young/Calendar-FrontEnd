import { dateConst } from "constants/constants";
import routes from "constants/routes";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { generateColor, parseDate } from "utils/utilFunction";
import styles from "./EventCardStyled.module.css";

const EventCardStyled = ({ id, title, date, startTime, endTime }) => {
  const history = useHistory();
  const [cardStyle, setCardStyle] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    let positionTop, positionLeft, cardWidth, cardHeight;

    if (pathname === routes.WEEKLY) {
      cardWidth = Math.floor((window.innerWidth * 81) / 100 / 7);
      cardHeight = (endTime - startTime) * 32;
      positionLeft = cardWidth * dateConst.DAYS[parseDate(date).day];
      positionTop = 60 + startTime * 32;
    } else if (pathname === routes.DAILY) {
      cardWidth = Math.floor((window.innerWidth * 81) / 100 / 7);
      cardHeight = (endTime - startTime) * 32;
      positionLeft = cardWidth * dateConst.DAYS[parseDate(date).day];
      positionTop = 60 + startTime * 32;
    }

    const cardStyle = {
      position: "absolute",
      top: `${positionTop}px`,
      left: `${positionLeft}px`,
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      backgroundColor: generateColor(),
      opacity: 0.9,
      cursor: "pointer",
    };

    setCardStyle(cardStyle);
  }, [pathname]);

  return (
    <div
      className={styles.eventCard}
      style={cardStyle}
      onClick={() => history.push(`/events/${id}`)}
    >
      <h1 className={styles.title}>{title}</h1>
      <span>
        {startTime}시 ~ {endTime}시
      </span>
    </div>
  );
};

export default EventCardStyled;
