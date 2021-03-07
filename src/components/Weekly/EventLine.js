import React from "react";
import styled from "styled-components";
import EventBox from "../../shared/EventBox";
import { convertHour } from "../../utils/convertHour";
import { times } from "../../utils/makeSpace";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
`;

const EventLine = ({ day, events, color }) => {
  const todayEvent = events[day];
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
          title={eventTitle}
          ID={day}
          color={color}
          hasEvent={hasEvent}
          eventStart={eventStart === n}
        />;
      })}
    </Wrapper>
  );
};

export default EventLine;
