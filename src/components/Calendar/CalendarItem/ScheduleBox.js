import React from "react";
import styles from "./ScheduleBox.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function ScheduleBox({ id }) {
  return (
    <Link to={`/events/new`}>
      <div
        role="button"
        className={styles.ScheduleBox}
        id={id}
        onClick={() => {console.log(id)}}
      />
    </Link>
  );
}

function mapStateToProps() {}

function mapDispatchToProps() {}

export default connect(null, null)(ScheduleBox);

ScheduleBox.propTypes = {
  id: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
};
