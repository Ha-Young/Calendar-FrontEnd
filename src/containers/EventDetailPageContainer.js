import { connect } from "react-redux";
import EventDetailPage from "../routes/EventDetailPage/EventDetailPage";
import { getEventById } from "../reducers/eventData";
import { changeEventData, removeEventData } from "../api/index";
import {
  updateEventDataSuccess,
  updateEventDataFail,
  updateEventData,
  deleteEventData,
  deleteEventDataSuccess,
  deleteEventDataFail,
} from "../actions/index";

const mapStateToProps = ({ eventData }) => ({
  getEventById: (id) => getEventById(eventData, id),
});

const mapDispatchToProps = (dispatch) => ({
  async submitEventData(data) {
    try {
      dispatch(updateEventData());

      await changeEventData(data);
      dispatch(updateEventDataSuccess({
        events: data,
      }));
    } catch (error) {
      dispatch(updateEventDataFail(error.message));
    }
  },
  async removeEventData(data) {
    try {
      dispatch(deleteEventData());

      await removeEventData(data);
      dispatch(deleteEventDataSuccess({
        events: data,
      }));
    } catch (error) {
      dispatch(deleteEventDataFail(error.message));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailPage);
