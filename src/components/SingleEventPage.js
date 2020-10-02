import React from 'react';
import PropTypes from 'prop-types';

export default function SingleEventPage({
  title,
  description,
  date,
  startTime,
  endTime
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className='time-box'>
        <div className='event-date'>{date}</div>
        <span>
          <b>{startTime}</b> 시부터{' '}
        </span>
        <span>
          <b>{endTime}</b> 시까지
        </span>
      </div>
    </>
  );
}

SingleEventPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.string,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
};
