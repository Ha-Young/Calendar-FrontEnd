import { connect } from "react-redux";
import EventDetailPage from "../routes/EventDetailPage/EventDetailPage";
import { getEventByPath } from "../reducers/eventData";
import { updateEventData, removeEventData } from "../api/index";

const mapStateToProps = ({ eventData }) => ({
  getEvents: (id, path) => getEventByPath(eventData, id, path),
});

const mapDispatchToProps = (dispatch) => ({
  async onSubmit(data) {
    try {
      // 디스패치 달기
      await updateEventData(data)
    } catch (error) {
      // 디스패치
    } finally {
      // 디스패치..
    }
  },
  async onRemove(data) {
    try {
      // 디스패치 달기
      await removeEventData(data)
    } catch (error) {
      // 디스패치
    } finally {
      // 디스패치..
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetailPage);
