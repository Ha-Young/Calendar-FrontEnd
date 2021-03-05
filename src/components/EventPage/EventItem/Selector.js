import React from "react";
import { TIME_FROM, TIME_TO } from "../../../constants/time";
import { connect } from "react-redux";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import { selectTime } from "../../../actions";
import styles from "./Selector.module.css";

function Selector({ props: {
    fromRef,
    toRef,
    from,
    to,
  },
  selectedTime,
  updateSelectedTime,
}) {
  return (
    <div className={styles.selectorTable}>
      <div>
        <h3>시작 시간</h3>
        <select
          defaultValue={TIME_FROM[from] || TIME_FROM[selectedTime]}
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
      </div>
      <div>
        <h3>종료 시간</h3>
        <select
          defaultValue={TIME_TO[to - 1] || null}
          ref={toRef}
        >
          {TIME_TO.slice(selectedTime).map(time => (
            <option value={time} key={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
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
