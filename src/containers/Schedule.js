import { connect } from "react-redux";
import Schedule from "../components/Schedule/Schedule";
import * as types from "../constants/actionTypes";

const mapStateToProps = function (state) {
  return {
    isWeeklySchedule: state.isWeeklySchedule,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateDateWithTime: (dateWithTime) => {
      dispatch({
        type: types.UPDATE_DATE_WITH_TIME,
        payload: dateWithTime,
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
