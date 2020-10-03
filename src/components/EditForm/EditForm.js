import React, { useState } from "react";
import Form from "../Form/Form";
import { useHistory, useParams } from "react-router-dom";
import { START_TIME_OPTIONS, FINISH_TIME_OPTIONS } from "../../constants";
import { editEvent } from "../../utils/api";

export default function EditForm({ eventData }) {
  const { eventId } = useParams();
  const thisEvent = eventData[eventId];
  const [eventTitle, setEventTitle] = useState(thisEvent.title);
  const [eventDescription, setEventDescription] = useState(thisEvent.description);
  const [eventDate, setEventDate] = useState(thisEvent.date);
  const [eventStartTime, setEventStartTime] = useState(thisEvent.startTime);
  const [eventFinishTime, setEventFinishTime] = useState(thisEvent.finishTime);
  const history = useHistory();

  function editEventHandler(ev) {
    ev.preventDefault();

    editEvent(eventTitle, eventDescription, eventDate, eventStartTime, eventFinishTime);

    alert("새 일정을 추가했습니다.");

    history.push("/calendar");

    setEventTitle("");
    setEventDescription("");
    setEventDate("");
    setEventStartTime("");
    setEventFinishTime("");
  }

  return (
    <Form
      buttonDescription="일정 고치기"
      submitHandler={editEventHandler}
    >
      <input type="text" name="title" placeholder="할 일" autoComplete="off" onChange={ev => setEventTitle(ev.target.value)} value={eventTitle} />
      <input type="text" name="description" placeholder="설명" autoComplete="off" onChange={ev => setEventDescription(ev.target.value)} value={eventDescription} />
      <input type="date" name="date" onChange={ev => setEventDate(ev.target.value)} value={eventDate} />
      <select onChange={ev => setEventStartTime(ev.target.value)} value={eventStartTime}>
        <option>{"시작 시간"}</option>
        {
          START_TIME_OPTIONS.map(option => {
            return (
              <option key={option}>{`${option}부터`}</option>
            );
          })
        }
      </select>
      <select onChange={ev => setEventFinishTime(ev.target.value)} value={eventFinishTime}>
        <option>{"끝나는 시간"}</option>
        {
          FINISH_TIME_OPTIONS.map(option => {
            return (
              <option key={option}>{`${option}까지`}</option>
            );
          })
        }
      </select>
    </Form>
  );
}