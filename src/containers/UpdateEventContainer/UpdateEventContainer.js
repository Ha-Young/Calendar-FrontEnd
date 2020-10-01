import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import Form from '../../components/Form/Form';

import { getEventById } from '../../reducers';
import { updateEvent, deleteEvent } from '../../utils/api';

function UpdateEventContainer({ getState, onSubmit, onDelete }) {
  const history = useHistory();
  const { params } = useRouteMatch();

  function handleClick() {
    onDelete(params.eventId);
    history.push("/calendar");
  }

  return (
    <>
      <Form
        onSubmit={onSubmit}
        target={getState(params.eventId)}
      />
      <button onClick={handleClick}>Delete</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    getState(id) {
      return getEventById(state.events, id);
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(event) {
      updateEvent(event, dispatch);
      // dispatch(updateEvent(event));
    },
    onDelete(id) {
      deleteEvent(id, dispatch);
      // dispatch({ type: 'DELETE_EVENT', events: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventContainer);
