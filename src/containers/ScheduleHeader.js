import { connect } from "react-redux";
import ScheduleHeader from "../components/Header/ScheduleHeader/ScheduleHeader";
import * as types from "../constants/actionTypes";

const mapStateToProps = function (state) {
  return {
    date: state.date,
    isWeeklySchedule: state.isWeeklySchedule,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateNextWeek: () => {
      dispatch({
        type: types.UPDATE_NEXT_WEEK,
      });
    },
    updateLastWeek: () => {
      dispatch({
        type: types.UPDATE_LAST_WEEK
      });
    },
    updateNextDay: () => {
      dispatch({
        type: types.UPDATE_NEXT_DAY,
      });
    },
    updatePrevDay: () => {
      dispatch({
        type: types.UPDATE_PREV_DAY,
      });
    },
    changeScheduleType: (type) => {
      dispatch({
        type: types.CHANGE_SCHEDULE_TYPE,
        payload: type
      });
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleHeader);
