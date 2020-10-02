import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { ROUTER } from '../../router';
import { connect } from 'react-redux';
import styles from './UpdateEventContainer.module.css';

import Form from '../../components/Form/Form';

import { updateEvent, deleteEvent } from '../../utils/api';
import { getEventById } from '../../reducers/events';
import { updateToEventList, deleteTargetEvent } from '../../actions/index';

function UpdateEventContainer({ getState, onSubmit, onDelete }) {
  const history = useHistory();
  const { params } = useRouteMatch();

  function handleClick() {
    onDelete(params.eventId);
    history.push(ROUTER.CALENDAR);
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

const mapStateToProps = ({ events }) => {
  return {
    getState(id) {
      return getEventById(events.byId, id);
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    async onSubmit(event) {
      try {
        const result = await updateEvent(event);
        dispatch(updateToEventList(result));
      } catch (error) {
        console.warn(error.message);
      }
    },
    async onDelete(id) {
      try {
        await deleteEvent(id);
        dispatch(deleteTargetEvent(id));
      } catch (error) {
        console.warn(error.message);
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventContainer);
