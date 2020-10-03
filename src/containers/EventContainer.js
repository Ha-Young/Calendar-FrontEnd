import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { pushData, updateData, deleteData } from "../utils/api";
import { addEvent, updateEvent, deleteEvent, showErrorMessage } from "../actions/actionCreators";
import NewEvent from "../components/NewEvent/NewEvent";
import EventDetail from "../components/EventDetail/EventDetail";
import Modal from "../components/Modal/Modal";
import PropTypes from "prop-types";

function EventContainer (props) {
  const {
    eventList,
    errorMessage,
    addEvent,
    updateEvent,
    deleteEvent,
  } = props;
  const [eventId, setEventId] = useState("");
  const [isValidEventId, setIsValidEventId] = useState(true);

  useEffect(() => {
    setIsValidEventId(checkValidEventId());
  }, [isValidEventId]);

  const checkValidEventId = () => {
    const validEventId = eventList?.map((list) => {
      return list.id;
    });

    return validEventId.includes(eventId);
  };

  const matchedEvent = eventList?.filter((list) => {
    return list.id === eventId;
  }).pop();

  return (
    <>
      <Switch>
        <Route path="/events/new">
          <NewEvent
            addEvent={addEvent}
            errorMessage={errorMessage}
          />
        </Route>
        <Route path="/events/:eventId">
          {
            isValidEventId
              ?
                <EventDetail
                  setEventId={(eventId) => setEventId(eventId)}
                  matchedEvent={matchedEvent}
                  updateEvent={updateEvent}
                  deleteEvent={deleteEvent}
                  errorMessage={errorMessage}
                />
              : <Modal text="Sorry! This URL is not valid and cannot be loaded." />
          }
        </Route>
      </Switch>
    </>
  );
}

const mapStateToProps = (state) => {
  const {
    eventControl: {
      errorMessage,
    },
    eventList,
  } = state;

  return {
    eventList: eventList,
    errorMessage: errorMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: async (eventDetails) => {
      try {
        await pushData(eventDetails);
        dispatch(addEvent(eventDetails));
      } catch (error) {
        dispatch(showErrorMessage(error.message));
      }
    },
    updateEvent: async (eventDetails) => {
      try {
        await updateData(eventDetails);
        dispatch(updateEvent(eventDetails));
      } catch (error) {
        dispatch(showErrorMessage(error.message));
      }
    },
    deleteEvent: async (eventDetails) => {
      try {
        await deleteData(eventDetails);
        dispatch(deleteEvent(eventDetails));
      } catch (error) {
        dispatch(showErrorMessage(error.message));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (EventContainer);

EventContainer.propTypes = {
  eventList: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  addEvent: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
};
