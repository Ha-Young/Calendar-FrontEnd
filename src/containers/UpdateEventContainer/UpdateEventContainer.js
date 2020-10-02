import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, useHistory } from 'react-router-dom';
import styles from './UpdateEventContainer.module.css';

import Form from '../../components/Form/Form';

import { getEventById } from '../../reducers/events';
import { updateEvent, deleteEvent } from '../../utils/api';

function UpdateEventContainer({ getState, onSubmit, onDelete }) {
  const history = useHistory();
  const { params } = useRouteMatch();

  function handleClick() {
    onDelete(params.eventId);
    history.push('/calendar');
  }

  return (
    <div className={styles.UpdateEventContainer}>
      <Form
        onSubmit={onSubmit}
        target={getState(params.eventId)}
        text='Update'
      />
      <button
        onClick={handleClick}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    getState(id) {
      return getEventById(state.events.byId, id);
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
