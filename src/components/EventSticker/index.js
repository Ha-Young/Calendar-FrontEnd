import React from "react";

import { getHour } from "../../utils/date";
// import styles from "./EventSticker.css";

const START_POS = 100; //Todo. constant로 빼기
const SCHEDULE_ROW_HEIGHT = 48;
const WIDTH = '80%';
const STICKER_POSITION = 'absolute';

function EventSticker({ event }) {
  const startTime = getHour(event.startDate);
  const timeLength = event.timeLength;

  console.log(startTime);

  const stickerStartTopPos = START_POS + (startTime * SCHEDULE_ROW_HEIGHT);
  const stickerHeight = timeLength * SCHEDULE_ROW_HEIGHT;

  const inlineStyle = {
    position: STICKER_POSITION,
    top: stickerStartTopPos,
    width: WIDTH,
    height: stickerHeight,
    backgroundColor: 'coral',
    cursor: 'pointer',
  };

  return (
    <div
      // className={styles.eventSticker}
      style={inlineStyle}
    >
      {event.title}
    </div>
  );
}

export default EventSticker;
