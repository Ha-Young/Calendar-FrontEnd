import React, { useState, useEffect } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import styles from "./EventForm.module.css";
import {
  addNewEventToFirebase,
  updateUserEventinfoToFirebase,
  deleteUserEventFromFirebase,
} from "../../api";
import { 
  EVENT_FORM_TYPE,
  EVENT_FORM_NAME,
  EVENT_FORM_PLACEHOLDER,
  INPUT_TIME_STEP,
} from "../../utils/constants";
import generateEventId from "../../utils/generateEventId";

function EventForm ({
  addNewEvent,
  formType,
  eventInfoList,
  deleteUserEvent,
  updateUserEvent,
  history,
}) {
  const params = useParams();
  let initialUserInputSetting;

  if (formType === EVENT_FORM_TYPE.UPDATING) {
    const selectedEvent = eventInfoList.filter((event) => event.id === Number(params.id));
    initialUserInputSetting = { ...selectedEvent.pop() }

  } else if (formType === EVENT_FORM_TYPE.ADDING) {
    initialUserInputSetting = {
      title: "",
      desc: "",
      date: "",
      startTime: "",
      endTime: "",
    }
  }

  const [userInputInfo, setUserInputInfo] = useState(initialUserInputSetting);

  function handleDeleteButtonClick(e) {
    e.preventDefault();

    deleteUserEventFromFirebase(Number(params.id));
    deleteUserEvent(Number(params.id));

    history.push("/calendar");
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const id = generateEventId();

    if (formType === EVENT_FORM_TYPE.UPDATING) {
      updateUserEventinfoToFirebase(userInputInfo);
      updateUserEvent([userInputInfo]);
    } else if (formType === EVENT_FORM_TYPE.ADDING) {
      addNewEvent({...userInputInfo, id: id});
      addNewEventToFirebase({...userInputInfo, id: id});
    }

    history.push("/calendar");
  }

  function handleUserInputChange(e) {
    e.preventDefault();

    const userInputType = e.target.name;
    const value = e.target.value;

    setUserInputInfo({
      ...userInputInfo,
      [userInputType]: value,
    });
  }

  return (
    <div className={styles.formWrap}>
      <Link className={styles.goBack} to="/calendar">
        Go Back
      </Link>

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            placeholder={EVENT_FORM_PLACEHOLDER.TITLE}
            name={EVENT_FORM_NAME.TITLE}
            value={userInputInfo.title || ""}
            onChange={handleUserInputChange}
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder={EVENT_FORM_PLACEHOLDER.DESC}
            name={EVENT_FORM_NAME.DESC}
            value={userInputInfo.desc || ""}
            onChange={handleUserInputChange}
            required
          />
        </label>

        <label>
          <input
            type="date"
            name={EVENT_FORM_NAME.DATE}
            value={userInputInfo.date || ""}
            required
            onChange={handleUserInputChange}
          />
        </label>

        <label>
          <input
            type="time"
            name={EVENT_FORM_NAME.START_TIME}
            value={userInputInfo.startTime || ""}
            step={INPUT_TIME_STEP}
            required
            onChange={handleUserInputChange}
          />
        </label>

        <label>
          <input
            type="time"
            name={EVENT_FORM_NAME.END_TIME}
            value={userInputInfo.endTime || ""}
            step={INPUT_TIME_STEP}
            required
            onChange={handleUserInputChange}
          />
        </label>

        <input type="submit" value={EVENT_FORM_PLACEHOLDER.SUBMIT}></input>
        { formType === EVENT_FORM_TYPE.UPDATING ?
          <input
            type="submit"
            onClick={handleDeleteButtonClick}
            value={EVENT_FORM_PLACEHOLDER.DELETE}>
          </input>
          : null
        }
      </form>
    </div>
  );
}

export default withRouter(EventForm);
