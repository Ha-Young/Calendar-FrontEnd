import { dateConst } from "constants/constants";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { generateColor, parseDate } from "utils/utilFunction";
import styles from "./EventCardStyled.module.css";

const EventCardStyled = ({ id, title, date, startTime, endTime }) => {
  const history = useHistory();
  const [cardStyle, setCardStyle] = useState();

  const color = useMemo(() => generateColor(), []);
  useEffect(() => {
    const containerWidth = (window.innerWidth * 90) / 100;
    const cardWidth = containerWidth / 7.5;
    const timeWidth = cardWidth / 2;
    const leftMargin = (window.innerWidth * 5) / 100;

    // const [color, setColor] = useState(generateColor());

    const positionLeft = `${
      leftMargin + timeWidth + cardWidth * dateConst.DAYS[parseDate(date).day]
    }px`;
    console.log(containerWidth);
    console.log(cardWidth);
    console.log(timeWidth);
    console.log(leftMargin);
    console.log(positionLeft);
    console.log(dateConst.DAYS[parseDate(date).day]);
    const positionTop = startTime;

    // useEffect(() => {
    //   const randomColor = generateColor();
    //   setColor(randomColor);
    // }, []);

    const cardHeight = (endTime - startTime) * 32;

    // const { nomal, hover } = useMemo(
    //   () => getRandomHSLColor(
    //     STICKER_COLOR_SATURATION,
    //     STICKER_COLOR_LIGHTNESS,
    //     STICKER_COLOR_HOVER_LIGHTNESS
    //   ), []
    // );

    // const stickerHoverColor = hoverColor || hover;

    const cardStyle = {
      position: "absolute",
      margin: 0,
      // top: ,
      left: positionLeft,
      // padding: "0px",
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      backgroundColor: color || generateColor(),
      opacity: 0.9,
      cursor: "pointer",
    };
    setCardStyle(cardStyle);
  }, [window.innerWidth]);

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
