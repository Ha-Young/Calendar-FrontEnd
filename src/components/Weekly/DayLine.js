import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { DAY_COLORS } from "../../assets/colors";
import { getWeek } from "../../utils/convertTime";
import EventLine from "./EventLine";
import { days } from "../../utils/makeSpace";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

const DayLine = ({ count, events }) => {
  const currentWeek = getWeek(count);

  return (
    <Wrapper>
      {days.map(n => {
        return <EventLine
          key={n}
          day={currentWeek[n]}
          events={events}
          color={DAY_COLORS[n]}
        />;
      })}
    </Wrapper>
  );
};

export default DayLine;

DayLine.propTypes = {
  count: PropTypes.number.isRequired,
  events: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startHour: PropTypes.string.isRequired,
    endHour: PropTypes.string.isRequired,
  }),
};
