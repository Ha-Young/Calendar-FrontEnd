import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './NewEventContainer.module.css';

import Form from '../../components/Form/Form';

import { writeEvent } from '../../utils/api';
import { addToEventList } from '../../actions/index';

function NewEventContainer({ onSubmit }) {
  return (
    <div className={styles.NewEventContainer}>
      <Form onSubmit={onSubmit} text='Create' />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    async onSubmit(event) {
      try {
        const result = await writeEvent(event);
        dispatch(addToEventList(result));
      } catch (error) {
        console.error(error.message);
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(NewEventContainer);

NewEventContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
