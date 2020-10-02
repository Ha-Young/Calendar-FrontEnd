import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../router';
import styles from './EventCell.module.css';

export default function EventCell({ event }) {
  const { id, top, height, title } = event;

  return (
    <Link
      key={id}
      to={ROUTER.EVENT + `/${id}`}
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
