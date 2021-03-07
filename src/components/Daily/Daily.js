import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Calendar from "../../shared/Calendar";
import TimeLine from "./TimeLine";
import EventLine from "./EventLine";
import DayHeader from "./DailyHeader/DayHeader";
import FlexBox from "../../shared/FlexBox";

const Daily = ({ count, onPage, events }) => {
  useEffect(() => {
    onPage();
  }, []);

  return (
    <Calendar>
      <DayHeader count={count} />
      <FlexBox>
        <TimeLine />
        <EventLine count={count} events={events} />
      </FlexBox>
    </Calendar>
  );
};

export default Daily;

Daily.propTypes = {
  count: PropTypes.number.isRequired,
  onPage: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
};
