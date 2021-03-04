import React from "react";
import styles from "./ScheduleBox.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectDate, periodUnit, selectTime } from "../../../actions";
import { getTimeIndex } from "../../../utils/getTimeIndex";

function ScheduleBox({
  id,
  address,
  periodToDay,
  updateCurrentDay,
  updateSelectedTime,
}) {
  return (
    <Link
      to={`/events/${address}`}
      className={styles.ScheduleBox}
      onClick={() => {
        periodToDay();
        updateCurrentDay();
        updateSelectedTime();
      }}
    >
      <div
        role="button"
        className={styles.ScheduleBox}
        id={id}
      />
    </Link>
  );
}

function mapStateToProps({ events }, { id: { date, time } }) {
  if (events[date] && events[date][time]) {
    return { address: `:${date}${time}` };
  }

  return { address: "new" };
}

function mapDispatchToProps(dispatch, { id: { date, time } }) {
  return {
    periodToDay: () => dispatch(periodUnit()),
    updateCurrentDay: () => dispatch(selectDate(date)),
    updateSelectedTime: () => dispatch(selectTime(getTimeIndex.from(time))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleBox);

ScheduleBox.propTypes = {
  id: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
};
