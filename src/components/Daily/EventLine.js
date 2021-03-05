import React from "react";
import styled from "styled-components";
import EventBox from "./EventBox";
import { getDayIndex, getDayIso } from "../../utils/convertTime";
import { DAY_COLORS } from "../../assets/colors";
import { convertHour } from "../../utils/convertHour";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;

  .event-box {
    width: 100%;
    height: 4em;
    border: 1px solid #ABABAB;
    border-top: none;

    &:hover {
      background-color: #EEEEEE;
      cursor: pointer;
    }
  }
`;

const TIME = 24;
const times = new Array(TIME).fill(undefined).map((v,idx) => idx);

const EventLine = ({ count, events }) => {
  const dayOfWeek = getDayIndex(count);
  const currentDay = getDayIso(count);
  const todayEvent = events[currentDay];
  const color = DAY_COLORS[dayOfWeek];
  const eventTitle = todayEvent ? todayEvent.title : null;
  let eventStart = null;
  let startHour = null;
  let endHour = null;
  let range = 0;
  let eventTime = {};

  if (todayEvent) {
    startHour = convertHour(todayEvent.startHour);
    eventStart = convertHour(todayEvent.startHour);
    endHour = convertHour(todayEvent.endHour);
    range = endHour - startHour;

    for (let i = 0; i < range; i++) {
      eventTime[startHour] = "hasEvent";
      startHour++;
    }
  }
  eventStart = Number(eventStart);

  return (
    <Wrapper>
      {times.map(n => {
        let hasEvent = false;

        if (eventTime.hasOwnProperty(n)) {
          hasEvent = true;
        }

        return <EventBox
          key={n}
          ID={currentDay}
          title={eventTitle}
          color={color}
          hasEvent={hasEvent}
          eventStart={eventStart === n}
        />;
      })}
    </Wrapper>
  );
};

export default EventLine;
