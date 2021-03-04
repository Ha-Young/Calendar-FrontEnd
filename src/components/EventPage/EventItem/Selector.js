import React from "react";
import { connect } from "react-redux";
import { selectTime } from "../../../actions";
import { TIME } from "../../../constants/time";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import styles from "./Selector.module.css";

function Selector({ selectedTime, updateSelectedTime }) {
  return (
    <div className={styles.selectorTable}>
      <select
        defaultValue={TIME[selectedTime]}
        onChange={(e) =>
          updateSelectedTime(getTimeIndex(e.target.value))
        }
      >
        {TIME.map((time) => (
          <option value={time} key={time}>
            {time}
          </option>
         ))}
    </select>
    <select>
      {TIME.slice(selectedTime).map(time => (
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
