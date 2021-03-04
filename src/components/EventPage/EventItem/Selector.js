import React from "react";
import { TIME_FROM, TIME_TO } from "../../../constants/time";
import { connect } from "react-redux";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import { selectTime } from "../../../actions";
import styles from "./Selector.module.css";

function Selector({
  selectedTime,
  updateSelectedTime,
  fromRef,
  toRef,
}) {
  return (
    <div className={styles.selectorTable}>
      <select
        defaultValue={TIME_FROM[selectedTime]}
        onChange={(e) =>
          updateSelectedTime(getTimeIndex.from(e.target.value))
        }
        ref={fromRef}
      >
        {TIME_FROM.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
         ))}
    </select>
    <select ref={toRef}>
      {TIME_TO.slice(selectedTime).map(time => (
        <option value={time} key={time}>
          {time}
        </option>
      ))}
    </select>
  </div>
  );
}

function mapStateToProps({ selectedTime }) {
  return { selectedTime };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSelectedTime: (time) => dispatch(selectTime(time)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
