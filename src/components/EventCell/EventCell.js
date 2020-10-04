import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTERS } from '../../router';
import styles from './EventCell.module.css';

export default function EventCell({ event }) {
  const { id, top, height, title } = event;

  return (
    <Link
      key={id}
      to={`${ROUTERS.EVENT}/${id}`}
      className={styles.EventCell}
      style={{
        top,
        height
      }}
    >
      {title}
    </Link>
  );
}

EventCell.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    top: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};
