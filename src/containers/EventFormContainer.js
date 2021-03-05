import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import EventForm from "../components/EventForm";
import { addNewEvent, getUserEvents } from "../actions";
import { EVENT_FORM_TYPE } from "../utils/constants"

function EventFormContainer({
  addNewEvent,
  EventInfoControlReducer,
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
            userEvents
            formType={EVENT_FORM_TYPE.UPDATING}
            eventInfoList={EventInfoControlReducer}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer);
