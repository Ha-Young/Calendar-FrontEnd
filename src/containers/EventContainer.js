import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {
  pushData,
  updateData,
  deleteData
} from "../utils/api";
import {
  addEvent,
  updateEvent,
  deleteEvent,
  showErrorMessage
} from "../actions/actionCreators";
import NewEvent from "../components/NewEvent/NewEvent";
import EventDetail from "../components/EventDetail/EventDetail";

function EventContainer ({ eventList, error, addEvent, updateEvent, deleteEvent }) {
  const [eventId, setEventId] = useState("");

  const matchedEvent = eventList?.filter((list) => {
    return list?.id === eventId;
  }).pop();

  return (
    <>
      <Switch>
        <Route path="/events/new">
          <NewEvent addEvent={addEvent} />
        </Route>
        <Route path="/events/:eventId">
          <EventDetail
            setEventId={(eventId) => setEventId(eventId)}
            matchedEvent={matchedEvent}
            updateEvent={updateEvent}
            deleteEvent={deleteEvent}
          />
          { error && error.message }
          {/* 여기도 다시 생각해보세요! */}
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  const { eventControl: { error }, eventList } = state;

  return {
    eventList: eventList,
    error: error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: async (eventDetails) => {
      // isLoading 처리 추후..
      try {
        await pushData(eventDetails);
        dispatch(addEvent(eventDetails));
      } catch (error) {
        dispatch(showErrorMessage(error));
      }
    },
    updateEvent: async (eventDetails) => {
      try {
        await updateData(eventDetails);
        dispatch(updateEvent(eventDetails));
      } catch (error) {
        dispatch(showErrorMessage(error));
      }
    },
    deleteEvent: async (eventDetails) => {
      try {
        await deleteData(eventDetails);
        dispatch(deleteEvent(eventDetails));
      } catch (error) {
        dispatch(showErrorMessage(error));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (EventContainer);
