import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./UnitSelectorContainer.module.scss";
import { changeDateUnit } from "../../actions";

function UnitSelectorContainer({ onDateUnitChange }) {
  const history = useHistory();
  return (
    <>
      <select
        onChange={(e) => {
          history.push("/calendar");
          onDateUnitChange(e.target.value);
        }}
        className={styles.UnitSelector}
        name="date-units"
        id="date-units"
      >
        <option value="일">일</option>
        <option value="주">주</option>
      </select>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateUnitChange(currentDateUnit) {
      dispatch(changeDateUnit(currentDateUnit));
    },
  };
};

UnitSelectorContainer.propTypes = {
  onDateUnitChange: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UnitSelectorContainer);
