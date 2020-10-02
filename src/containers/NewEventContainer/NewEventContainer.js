import React from 'react';
import { connect } from 'react-redux';
import styles from './NewEventContainer.module.css';

import Form from '../../components/Form/Form';

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
    onSubmit(event) {
      writeEvent(event, dispatch);
    }
  };
};

export default connect(null, mapDispatchToProps)(NewEventContainer);
