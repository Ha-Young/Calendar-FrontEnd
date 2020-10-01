import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Modal from './Modal';
import Button from './Button';

export default function HourBox({ data }) {
  const hasEvents = !!data.events.length;
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
                  data.events.map(event => {
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
              <Button value='뒤로' onClick={toggleModal}/>
            </>
          }
        </Modal>
      }
      <div
        key={data.hour}
        className={`hour-box ${hasEvents ? 'paint' : ""}`}
        onClick={toggleModal}
      >{`${data.hour}시`}
        {
          <ul>
            {
              data.events.map(event => {
                return <li key={event.id}>{event.title}</li>;
              })
            }
          </ul>
        }
      </div>
    </>
  );
}
