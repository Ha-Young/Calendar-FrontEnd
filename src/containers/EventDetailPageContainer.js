import { connect } from "react-redux";
import EventDetailPage from "../routes/EventDetailPage/EventDetailPage";
import { getEventByPath } from "../reducers/eventData";

const mapStateToProps = ({ eventData }) => ({
  getEvents: (id, path) => getEventByPath(eventData, id, path),
});

export default connect(mapStateToProps, null)(EventDetailPage);
