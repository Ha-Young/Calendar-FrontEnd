import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { ROUTERS } from '../../router';
import { connect } from 'react-redux';
import styles from './UpdateEventContainer.module.css';

import Form from '../../components/Form/Form';

import { updateEvent, deleteEvent } from '../../utils/api';
import { getEventById } from '../../reducers/events';
import { updateToEventList, deleteTargetEvent } from '../../actions/index';

function UpdateEventContainer({ events, onSubmit, onDelete }) {
  const history = useHistory();
  const { params } = useRouteMatch();

  const handleDeleteClick = useCallback(function () {
    onDelete(params.eventId);
    history.push(ROUTERS.CALENDAR);
  }, [onDelete, history]);

  return (
    <div className={styles.UpdateEventContainer}>
      <Form
        onSubmit={onSubmit}
        initialValues={getEventById(events, params.eventId)}
        text='Update'
      />
      <button
        onClick={handleDeleteClick}
        className={styles.deleteButton}
      >
        Delete
      </button>
    </div>
  );
}

const mapStateToProps = ({ events }) => {
  return {
    events: events.byId
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

UpdateEventContainer.propTypes = {
  events: PropTypes.shape({
    [PropTypes.string.isRequired] : PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  }),
  onSubmit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
