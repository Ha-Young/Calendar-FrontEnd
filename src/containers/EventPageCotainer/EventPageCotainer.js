import React from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styles from "./EventPageCotainer.module.scss";
import EventCreationPage from "../../components/EventPage/EventCreationPage";
import EventDetailPage from "../../components/EventPage/EventDetailPage";
import { updateEvent } from "../../actions/index";
import {
  createEventData,
  updateEventData,
  removeEventData,
} from "../../utils/api";

function EventPageCotainer({ events, onEventChange }) {
  const { eventId } = useParams();
  const history = useHistory();
  const currentEventInfo = events?.filter(
    (event) => event?.eventId === Number(eventId)
  )[0];

  const handleEventChange = async (changeType, eventInfo) => {
    try {
      if (changeType === "create") {
        await createEventData(onEventChange, eventInfo);
      } else if (changeType === "update") {
        await updateEventData(onEventChange, eventInfo);
      } else if (changeType === "remove")
        await removeEventData(onEventChange, eventInfo);
    } catch (error) {
      console.warn(error);
    }

    history.push("/calendar");
  };

  return (
    <div className={styles.EventPage}>
      {eventId === "new" ? (
        <>
          <h1>이벤트 생성하기</h1>
          <EventCreationPage onEventChange={handleEventChange} />
        </>
      ) : (
        currentEventInfo && (
          <>
            <h1>이벤트 상세보기</h1>
            <EventDetailPage
              eventInfo={currentEventInfo}
              onEventChange={handleEventChange}
            />
          </>
        )
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    events: state.events,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onEventChange(eventInfo) {
      dispatch(updateEvent(eventInfo));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPageCotainer);
