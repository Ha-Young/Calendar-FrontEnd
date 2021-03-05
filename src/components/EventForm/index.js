import React, { useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import styles from "./EventForm.module.css";
import {
  addNewEventToFirebase,
  updateUserEventinfoToFirebase,
  deleteUserEventFromFirebase,
} from "../../api";
import { EVENT_FORM_TYPE } from "../../utils/constants";

function EventForm ({
  addNewEvent,
  formType,
  eventInfoList,
  deleteUserEvent,
  updateUserEvent,
  history
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

    history.push("/");
  }

  const generateEventId = () => Math.floor(Math.random() * new Date());

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


    history.push("/");
  }

  function handleUserInputChange(e) {
    e.preventDefault();

    const userInputType = e.target.name;
    const value = e.target.value;

    setUserInputInfo({
      ...userInputInfo,
      [userInputType]: value,
    });

    console.log(userInputInfo);
  }

  return (
    <div className={styles.formWrap}>
      <Link to="/calendar">
        Go Back
      </Link>

      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            placeholder="event title"
            name="title"
            value={userInputInfo.title || ""}
            onChange={handleUserInputChange}
            required
          />
        </label>

        <label>
          <input
            type="text"
            placeholder="type your event desc"
            name="desc"
            value={userInputInfo.desc || ""}
            onChange={handleUserInputChange}
            required
          />
        </label>

        <label>
          <input
            type="date"
            placeholder="event description"
            name="date"
            value={userInputInfo.date || ""}
            required
            onChange={handleUserInputChange}
          />
        </label>

        <label>
          <input
            type="time"
            placeholder="event start time"
            name="startTime"
            value={userInputInfo.startTime || ""}
            step="3600"
            // min="01:00"
            // max="24:00"
            required
            onChange={handleUserInputChange}
             />
        </label>

        <label>
          <input
            type="time"
            placeholder="event end time"
            name="endTime"
            value={userInputInfo.endTime || ""}
            step="3600"
            // min="01:00"
            // max="24:00"
            required
            onChange={handleUserInputChange}
          />
        </label>

        <input type="submit" value="submit!"></input>
        { formType === EVENT_FORM_TYPE.UPDATING ?
          <input type="submit" onClick={handleDeleteButtonClick} value="delete this event"></input>
          : null
        }
      </form>
    </div>
  );
}

export default withRouter(EventForm);
