import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { convertHour } from "../../utils/convertHour";
import convertTime from "../../utils/convertToAmPm";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30em;
  padding: 0 5em 0;
  padding-top: 8em;
`;

const EventInfo = ({ events }) => {
  const { day } = useParams();
  const event = events[day];
  const title = event.title;
  const description = event.description;
  const startHour = convertTime(convertHour(event.startHour));
  const endHour = convertTime(convertHour(event.endHour));

  return (
    <Wrapper>
      <div>
        <div>Title: {title}</div>
        <div>Desc: {description}</div>
        <div>Start Time: {startHour}</div>
        <div>End Time: {endHour}</div>
      </div>
      <button>Modify</button>
    </Wrapper>
  );
};

export default EventInfo;
