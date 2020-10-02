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

  console.log(events);
  const currentEventInfo = events?.filter(
    (event) => event?.eventId === Number(eventId)
  )[0];

  const handleEventCreate = async (eventInfo) => {
    try {
      await createEventData(onEventChange, eventInfo);
    } catch (error) {
      console.error(error);
    }

    history.push("/calendar");
  };

  const handleEventUpdate = async (eventInfo) => {
    try {
      await updateEventData(onEventChange, eventInfo);
    } catch (error) {
      console.error(error);
    }

    history.push("/calendar");
  };

  const handleEventDelete = async (eventId) => {
    try {
      await removeEventData(onEventChange, eventId);
    } catch (error) {
      console.error(error);
    }

    history.push("/calendar");
  };

  return (
    <div className={styles.EventPage}>
      {eventId === "new" ? (
        <>
          <h1>이벤트 생성하기</h1>
          <EventCreationPage onEventCreate={handleEventCreate} />
        </>
      ) : (
        currentEventInfo && (
          <>
            <h1>이벤트 상세보기</h1>
            <EventDetailPage
              eventInfo={currentEventInfo}
              onEventUpdate={handleEventUpdate}
              onEventDelete={handleEventDelete}
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
