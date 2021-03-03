import React, { useEffect, useRef, useState, } from "react";
import styles from "./EventEditor.module.css";
import InputBox from "./InputBox";
import parseDateString from "date-fns/parse";
import testEventValidation from "../../util/testEventValidation";

/*
  이벤트 제목
  이벤트 설명
  이벤트 시작 날짜 및 시간
  이벤트 종료 날짜 및 시간
*/

export default function EventEditor(props) {
  const { 
    selectedEvent,
    allEvents,
    isUpdate = false,
    createEvent,
    updateEvent,
  } = props;

  console.log(allEvents);

  const [message, setMessage] = useState("");

  const $inputTitle = useRef();
  const $inputDescription = useRef();
  const $inputDate = useRef();
  const $inputStartTime = useRef();
  const $inputEndTime = useRef();

  useEffect(() => {
    if (selectedEvent) {
      $inputTitle.current.value = selectedEvent.title;
      $inputDescription.current.value = selectedEvent.description;
      $inputDate.current.value = selectedEvent.date;
      $inputStartTime.current.value = selectedEvent.start;
      $inputEndTime.current.value = selectedEvent.end;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.currentTarget.title.value.trim();
    const description = e.currentTarget.description.value.trim();
    const date = e.currentTarget.date.value;
    const startHour = e.currentTarget.start.value.slice(0, 2);
    const endHour = e.currentTarget.end.value.slice(0, 2);
    const id = `${date}-${startHour}-${endHour}`;

    const eventData = {
      title,
      date,
      startHour,
      endHour,
      id,
    };

    const startDate = parseDateString(`${date} ${startHour}`,"yyyy-MM-dd HH", new Date());
    const endDate = parseDateString(`${date} ${endHour}`,"yyyy-MM-dd HH", new Date());

    // if (!testEventValidation(e, eventData, allEvents, setMessage)) {
    //   return;
    // }

    const newEvent = {
      title,
      description,
      startDate,
      endDate,
      id,
    }

    if (isUpdate) {
      updateEvent(selectedEvent, newEvent);
    } else {
      createEvent(newEvent);
    }
  }
  
  const handleDateChange = (e) => {
    const timeString = e.currentTarget.value;
    const hour = timeString.slice(0, 2);
    const minute = timeString.slice(3);

    if (minute !== "00") {
      e.currentTarget.value = `${hour}:00`;
    }
  }

  return (
    <div className={styles.NewEvent}>
      <form 
        className={styles.NewEventForm}
        onSubmit={handleSubmit}
      >
        <InputBox 
          labelFor="title"
          labelContent="Title"
        >
          <input 
            className={styles.InputText} 
            type="text" 
            name="title" 
            ref={$inputTitle}
          />
        </InputBox>
        <InputBox 
          labelFor="description"
          labelContent="Description"
        >
          <textarea 
            className={styles.InputText} 
            name="description" 
            cols="30" 
            rows="10"
            ref={$inputDescription}
          />
        </InputBox>
        <InputBox 
          labelFor="date"
          labelContent="Date"
        >
          <input 
            className={styles.InputDate} 
            type="date" 
            name="date"
            ref={$inputDate}
          />
        </InputBox>
        <div className={styles.InputStartEndTimeBox}>
          <InputBox 
            labelFor="start"
            labelContent="Start"
          >
            <input 
              className={styles.InputTime} 
              type="time" 
              name="start"
              onChange={handleDateChange}
              ref={$inputStartTime}
            />
          </InputBox>
          <InputBox 
            labelFor="end"
            labelContent="End"
          >
            <input 
              className={styles.InputTime} 
              type="time" 
              name="end"
              onChange={handleDateChange}
              ref={$inputEndTime}
            />
          </InputBox>
        </div>
        <div className={styles.MessageBox}>
          {message}
        </div>
        <button className={styles.SubmitButton} type="submit">Save Event</button>
      </form>
    </div>
  );
}