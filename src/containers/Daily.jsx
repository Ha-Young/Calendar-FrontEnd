import React, { useState, useEffect } from "react";
import { directionConst } from "constants/constants";
import CalenderHeader from "components/CalenderHeader/CalenderHeader";
import DailySchedule from "../components/DailySchedule/DailySchedule";
import { connect } from "react-redux";
import { actionCreators } from "actions/actionCreators";
import { getDateISO, parseDate } from "utils/utilFunction";
import { fetchDailyEvent } from "api/firebaseAPIs";

const Daily = ({ dailyEvent, showDaily }) => {
  const [dateCount, setDateCount] = useState(0);
  const [date, setDate] = useState(parseDate(getDateISO(0)));

  useEffect(() => {
    fetchDailyEvent((events) => {
      showDaily(events, getDateISO(dateCount));
    }, getDateISO(dateCount));
  }, [showDaily, dateCount]);

  const setNewDate = (direction) => {
    let currentDateCount = dateCount;

    if (direction === directionConst.PREV) {
      currentDateCount--;
    }

    if (direction === directionConst.NEXT) {
      currentDateCount++;
    }

    setDateCount(currentDateCount);
    setDate(parseDate(getDateISO(currentDateCount)));
  };

  return (
    <>
      <CalenderHeader
        onClick={setNewDate}
        currentPeriod={
          date.month +
          "월 " +
          date.date +
          "일 " +
          date.day.toUpperCase().slice(0, 3)
        }
      />
      <DailySchedule dailyEvent={dailyEvent} />
    </>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    showDaily: (events, date) =>
      dispatch(actionCreators.showDaily(events, date)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
