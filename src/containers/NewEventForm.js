import { connect } from "react-redux";

import { addEvent } from "../actions/index";
import { updateData } from "../api/index";
import NewEventForm from "../components/NewEventForm/NewEventForm";

const mapStateToProps = (state) => ({
  date: state.date,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (event) => {
    const { date, start: id } = event;
    const { history } = ownProps;

    updateData({date, id, event});
    dispatch(addEvent(event));
    history.push("/");
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEventForm);
