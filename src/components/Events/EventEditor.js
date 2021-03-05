import React, { useEffect, useRef, useState, } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { parse } from "date-fns";
import styles from "./EventEditor.module.css";
import testEventValidation from "../../util/testEventValidation";
import InputTitle from "./InputTitle";
import InputDescription from "./InputDescription";
import InputDate from "./InputDate";
import InputTime from "./InputTime";
import ButtonBox from "./EventEditorButtonBox"

export default function EventEditor(props) {
  const { 
    userId,
    allEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    setCurrentDay,
  } = props;

  const history = useHistory();
  const location = useLocation();
  const selectedEvent = location?.state?.selectedEvent;
  const isUpdate = location?.state?.isUpdate;
  const isReadMode = location?.state?.isReadMode;

  const inputTextClassName = isReadMode ? `${styles.InputText} ${styles.ReadModeInput}` : styles.InputText;
  const inputDateClassName = isReadMode ? `${styles.InputDate} ${styles.ReadModeInput}` : styles.InputDate;
  const inputTimeClassName = isReadMode ? `${styles.InputTime} ${styles.ReadModeInput}` : styles.InputTime;

  const [message, setMessage] = useState("");

  const $inputTitle = useRef();
  const $inputDescription = useRef();
  const $inputDate = useRef();
  const $inputStartTime = useRef();
  const $inputEndTime = useRef();

  const linkToEdit = isReadMode ? {
    pathname:`/events/${selectedEvent.id}`,
    state: { 
      selectedEvent,
      isReadMode: false,
      isUpdate: true,
    }
  } : null;

  useEffect(() => {
    if (selectedEvent) {
      $inputTitle.current.value = selectedEvent.title ?? "";
      $inputDescription.current.value = selectedEvent.description ?? "";
      $inputDate.current.value = selectedEvent.date ?? "";
      $inputStartTime.current.value = selectedEvent.startTime ? `${selectedEvent.startTime}:00` : "";
      $inputEndTime.current.value = selectedEvent.endTime ? `${selectedEvent.endTime}:00` : "";
    } 
    else {
      $inputTitle.current.value = "";
      $inputDescription.current.value = "";
      $inputDate.current.value = "";
      $inputStartTime.current.value = "";
      $inputEndTime.current.value = "";
    }
  }, [selectedEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.currentTarget.title.value.trim();
    const description = e.currentTarget.description.value.trim();
    const date = e.currentTarget.date.value;
    const startTime = e.currentTarget.start.value.slice(0,2);
    const endTime = e.currentTarget.end.value.slice(0,2);
    const id = `${date}-${startTime}-${endTime}`;
    const length = Number(endTime) - Number(startTime);

    const newEvent = {
      title,
      description,
      date,
      startTime,
      endTime,
      length,
      id,
    };

    if (!testEventValidation(e, newEvent, allEvents, setMessage)) {
      return;
    }

    const currentDate = parse(newEvent.date, "yyyy-MM-dd", new Date());
    setCurrentDay(currentDate);
    
    if (isUpdate) {
      updateEvent(userId, selectedEvent, newEvent);
    } else {
      createEvent(userId, newEvent);
    }

    history.push("/calendar/week");
  }
  
  const handleDateChange = (e) => {
    const timeString = e.currentTarget.value;
    const hour = timeString.slice(0, 2);
    const minute = timeString.slice(3);

    if (minute !== "00") {
      e.currentTarget.value = `${hour}:00`;
    }
  }

  const handleDeleteButtonClick = (e) => {
    deleteEvent(userId, selectedEvent);
    history.push("/calendar/week");
  }

  return (
    <div className={styles.NewEvent}>
      <form 
        className={styles.NewEventForm}
        onSubmit={handleSubmit}
      >
        <InputTitle 
          inputClassName={inputTextClassName}
          inputRef={$inputTitle} 
          isReadOnly={!!isReadMode}
        />

        <InputDescription 
          textareaClassName={inputTextClassName}
          textareaRef={$inputDescription}
          isReadOnly={!!isReadMode}
        />

        <InputDate 
          inputDateClassName={inputDateClassName} 
          inputDateRef={$inputDate} 
          isReadOnly={!!isReadMode}
        />

        <div className={styles.InputStartEndTimeBox}>
          <InputTime 
            inputTimeClassName={inputTimeClassName}
            inputTimeRef={$inputStartTime}
            isReadOnly={!!isReadMode}
            isStartTime={true}
            onChange={handleDateChange}
          />

          <InputTime 
            inputTimeClassName={inputTimeClassName}
            inputTimeRef={$inputEndTime}
            isReadOnly={!!isReadMode}
            isStartTime={false}
            onChange={handleDateChange}
          />
        </div>
        <hr />
        <div className={styles.MessageBox}>
          {message}
        </div>

        <ButtonBox 
          isReadMode={isReadMode}
          isUpdateMode={isUpdate}
          linkToEdit={linkToEdit}
          onDeleteClick={handleDeleteButtonClick} 
        />
      </form>
    </div>
  );
}
