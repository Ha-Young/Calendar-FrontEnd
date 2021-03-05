import { connect } from "react-redux";
import React from "react";
import { Route, Switch } from "react-router-dom";
import EventForm from "../components/EventForm";
import { addNewEvent } from "../actions";

function EventFormContainer({
  addNewEvent,
}) {
  return (
    <div>
      <Switch>
        <Route path="/events/new">
          <EventForm
            addNewEvent={addNewEvent}
          />
        </Route>

        <Route path="/events/:id">
          <EventForm />
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
    addNewEvent(userInputInfo){
      dispatch(addNewEvent(userInputInfo))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer);