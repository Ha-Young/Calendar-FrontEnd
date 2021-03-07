import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDataFromFirebaseDB, removeFromFirebaseDB } from "../../api";
import { getPathString } from "../../utils";

export default function EventDetails({ eventById, updateEventForm, updateUserEvent, deleteUserEvent }) {
  const { eventId } = useParams();
  const { title, content, period } = eventById[eventId];
  const from = new Date(period.from);
  const to = new Date(period.to);
  const year = from.getFullYear();
  const month = from.getMonth() + 1;
  const date = from.getDate();
  const fromHour = from.getHours();
  const toHour = to.getHours();

  useEffect(processFetchingEvent, []);

  function processFetchingEvent() {
    const path = getPathString(year, month, "contents", eventId);
    fetchDataFromFirebaseDB(path)
      .then((snapShot) => {
        if (!snapShot) return;
        const content = snapShot.val().content;
        updateUserEvent({ [eventId]: { id: eventId, content } });
      })
      .catch((err) => {
        // add Error Handling
      });
  }

  function processDeletingEvent() {
    const path = getPathString(year, month);
    const pathToContent = getPathString("contents", eventId);
    const pathToEvents = getPathString("events", eventId);
    const removeBundle = {
      [pathToContent]: null,
      [pathToEvents]: null,
    };

    removeFromFirebaseDB(path, removeBundle)
      .then((res) => {
        deleteUserEvent(eventId)
      })
      .catch((err) => {
        //Add error handling.
      });
  }

  const isValidEvent = !!eventById[eventId];

  if (!isValidEvent) return <div>유효하지 않음!</div>;

  return (
    <>
      <header>Event Details</header>
      <div>
        <span>Title:</span>
        <h2>{title}</h2>
      </div>
      <div>
        <span>Year:</span>
        <h3>{year}</h3>
        <span>Month:</span>
        <h3>{month + 1}</h3>
        <span>Date:</span>
        <h3>{date}</h3>
        <span>From:</span>
        <h3>{fromHour}</h3>
        <span>To:</span>
        <h3>{toHour}</h3>
      </div>
      <div>
        <span>Content:</span>
        <h3>{content}</h3>
      </div>
      <Link to="/events/new">
        <button onClick={() => {
          updateEventForm({ eventId, title, content, year, month, date, fromHour, toHour });
        }}>수정</button>
      </Link>
      <Link to="/calendar">
        <button onClick={processDeletingEvent}>삭제</button>
      </Link>
    </>
  );
}
