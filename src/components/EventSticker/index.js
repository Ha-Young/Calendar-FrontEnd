import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";

import { PATH_EVENTS } from "../../constants/path";
import { getRandomHSLColor } from "../../utils/common";
import { getHour } from "../../utils/date";
import styles from "./EventSticker.module.css";

const START_POS = 100;
const SCHEDULE_ROW_HEIGHT = 48;
const WIDTH = "60%";
const STICKER_POSITION = "absolute";
const STICKER_COLOR_SATURATION = "100%";
const STICKER_COLOR_LIGHTNESS = "85%";
const STICKER_COLOR_HOVER_LIGHTNESS = "75%";

function EventSticker({ event, color, hoverColor }) {
  const [isHover, setIsHover] = useState(false);
  const history = useHistory();

  const startTime = getHour(event.startDate);
  const timeLength = event.timeLength;

  const stickerStartTopPos = START_POS + startTime * SCHEDULE_ROW_HEIGHT;
  const stickerHeight = timeLength * SCHEDULE_ROW_HEIGHT;

  const { nomal, hover } = useMemo(
    () => getRandomHSLColor(
      STICKER_COLOR_SATURATION,
      STICKER_COLOR_LIGHTNESS,
      STICKER_COLOR_HOVER_LIGHTNESS
    ), []
  );

  const stickerColor = color || nomal;
  const stickerHoverColor = hoverColor || hover;

  const inlineStyle = {
    position: STICKER_POSITION,
    top: stickerStartTopPos,
    padding: "10px",
    width: WIDTH,
    height: stickerHeight,
    backgroundColor: isHover ? stickerHoverColor : stickerColor,
    cursor: "pointer",
  };

  return (
    <div className={styles.eventSticker}>
      <div
        style={inlineStyle}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => history.push(`${PATH_EVENTS}/${event.id}`)}
      >
        {event.title}
      </div>
    </div>
  );
}

export default EventSticker;
