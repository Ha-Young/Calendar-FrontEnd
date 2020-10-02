import React from 'react';
import { connect } from 'react-redux';
import styles from './NewEventContainer.module.css';

import Form from '../../components/Form/Form';

import { addToEventList } from '../../actions/index';
import { writeEvent } from '../../utils/api';

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
