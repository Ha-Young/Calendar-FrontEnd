import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { setIsWeek } from "../actions/index";

// isWeek, weekData, today

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",

  isWeek: state.Calendar.isWeek,
  today: state.Calendar.today,
  weekData: state.Calendar.weekData,
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: () => {
    saveSampleData();
  },

  onChangeDateUnit: (e) => {
    console.log(e.currentTarget)
    dispatch(setIsWeek())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
