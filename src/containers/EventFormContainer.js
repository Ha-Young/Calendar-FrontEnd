import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import EventForm from "../components/EventForm";
import { addNewEvent, getUserEvents, updateUserEvent, deleteUserEvent } from "../actions";
import { EVENT_FORM_TYPE } from "../utils/constants"

function EventFormContainer({
  addNewEvent,
  EventInfoControlReducer,
  deleteUserEvent,
  updateUserEvent,
}) {

  return (
    <div>
      <Switch>
        <Route path="/events/new">
          <EventForm
            addNewEvent={addNewEvent}
            formType={EVENT_FORM_TYPE.ADDING}
          />
        </Route>

        <Route path="/events/:id">
          <EventForm
            formType={EVENT_FORM_TYPE.UPDATING}
            eventInfoList={EventInfoControlReducer}
            deleteUserEvent={deleteUserEvent}
            updateUserEvent={updateUserEvent}
          />
        </Route>
      </Switch>
    </div>
  )
}

function mapStateToProps({
  EventInfoControlReducer,
}) {
  return {
    EventInfoControlReducer,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNewEvent(userInputInfo) {
      dispatch(addNewEvent(userInputInfo));
    },
    getUserEvents(fetchedUserEvents) {
      dispatch(getUserEvents(fetchedUserEvents));
    },
    deleteUserEvent(targetEventId) {
      dispatch(deleteUserEvent(targetEventId));
    },
    updateUserEvent(updatedUserEventInfo) {
      dispatch(updateUserEvent(updatedUserEventInfo));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer);
