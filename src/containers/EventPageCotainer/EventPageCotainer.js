import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./EventPageCotainer.module.scss";
import EventHandlingPage from "../../components/EventPage/EventHandlingPage";
import { CREATE, UPDATE, DELETE } from "../../constants/dataChangeTypes";
import {
  createEventData,
  updateEventData,
  deleteEventData,
} from "../../utils/api";

function EventPageCotainer({ events }) {
  const { eventId } = useParams();
  const history = useHistory();
  const eventInfo = events?.[eventId];

  const handleEventChange = async (changeType, eventInfo) => {
    try {
      if (changeType === CREATE) {
        await createEventData(eventInfo);
      } else if (changeType === UPDATE) {
        await updateEventData(eventInfo);
      } else if (changeType === DELETE) {
        await deleteEventData(eventId);
      }
    } catch (error) {
      console.warn(error);
    }

    history.push("/calendar");
  };

  return (
    <div className={styles.EventPage}>
      <h1>이벤트 {eventId === "new" ? "생성" : "수정"}하기</h1>
      <EventHandlingPage
        eventInfo={eventInfo}
        onEventChange={handleEventChange}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    events: state.events.byId,
  };
}

EventPageCotainer.propTypes = {
  events: PropTypes.shape({
    eventDate: PropTypes.string,
    eventDescription: PropTypes.string,
    eventEndTime: PropTypes.string,
    eventStartTime: PropTypes.string,
    eventId: PropTypes.number,
    eventTitle: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(EventPageCotainer);
