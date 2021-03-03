import { connect } from "react-redux";
import EventDetailPage from "../routes/EventDetailPage/EventDetailPage";
import { getEventById } from "../reducers/eventData";

const mapStateToProps = ({ eventData }) => ({
  getEvents: (id) => getEventById(eventData, id),
});

export default connect(mapStateToProps, null)(EventDetailPage);
