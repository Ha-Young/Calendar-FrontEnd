import React from 'react';
import { Route, useParams } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const params = useParams();
  const id = '12343456';
  if (events) {
    console.log('details', [...[events['events']['2020']['10']]]);
    console.log(Object.values(events['events']['2020']['10']).length);
  }
  //url매치되는 곳에 뿌려주면 될거같은데...
  // // const foundData = [...events['2020']['10']];
  // console.log(foundData);
  return (
    <>
      {
        events &&
        <Route path={`/events/${id}`}>
          <div>
            <div>{events.title}</div>
            <div>{events.description}</div>
            <div>{events.date}</div>
            <button >수정</button>
            <button >삭제</button>
          </div>
        </Route>
      }
    </>
  );
};

export default EventDetails;
