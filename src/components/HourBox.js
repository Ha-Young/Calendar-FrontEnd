import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Button from './Button';

export default function HourBox({
  hour,
  events
}) {
  const hasEvents = events.length;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const history = useHistory();

  function toggleModal() {
    if (hasEvents) {
      setIsOpenModal(prev => !prev);
    }
  }

  return (
    <>
      {
        isOpenModal &&
        <Modal>
          {
            <>
              <ul>
                {
                  events.map(event => {
                    return (
                      <li
                        key={event.id}
                        onClick={() => history.push(`/events/${event.id}`)}
                        className='event-list'
                      >
                      {event.title}
                      </li>
                    );
                  })
                }
              </ul>
              <Button buttonText='뒤로' onClick={toggleModal}/>
            </>
          }
        </Modal>
      }
      <div
        className={`hour-box ${hasEvents ? 'paint' : ''}`}
        onClick={toggleModal}
      >
      {
        `${hour}시`
      }
      {
        <ul>
          {
            events.map(event => {
              return <li key={event.id}>{event.title}</li>;
            })
          }
        </ul>
      }
      </div>
    </>
  );
}

HourBox.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  hour: PropTypes.number.isRequired,
};