import React from "react";
import { TIME_FROM, TIME_TO } from "../../../constants/time";
import { SELECTOR_NAME } from "../../../constants/common";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import styles from "./Selector.module.css";
import PropTypes from "prop-types";

function Selector({
  props: {
    from,
    to,
    fromRef,
    toRef,
  },
  selectedTime,
  updateSelectedTime,
}) {
  return (
    <div className={styles.selectorTable}>
      <div>
        <h3>{SELECTOR_NAME.START}</h3>
        <select
          defaultValue={TIME_FROM[from] || TIME_FROM[selectedTime]}
          onChange={(e) =>
            updateSelectedTime(getTimeIndex.fromIndex(e.target.value))
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
        <h3>{SELECTOR_NAME.END}</h3>
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

export default Selector;

Selector.propTypes = {
  props: PropTypes.shape({
    from: PropTypes.number,
    to: PropTypes.number,
    fromRef: PropTypes.object.isRequired,
    toRef: PropTypes.object.isRequired,
  }),
  selectedTime: PropTypes.number,
  updateSelectedTime: PropTypes.func.isRequired,
};
