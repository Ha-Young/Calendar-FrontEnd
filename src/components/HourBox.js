import React from 'react';

export default function HourBox({ data }) {
  const hasEvents = !!data.events.length;

  return (
    <>
      <div
        key={data.hour}
        className={`hour-box ${hasEvents ? 'paint' : ""}`}
      >{`${data.hour}시`}
        {data.events.map(event => {
          return event ? <div key={event}>{event}</div> : null;
        })}
      </div>
    </>
  );
}
