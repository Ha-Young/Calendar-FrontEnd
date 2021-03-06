import React, { useState } from "react";
import styles from "./EventDetailPage.module.css";
import PropTypes from "prop-types";
import { useHistory, useParams } from "react-router-dom";
import EventDetail from "./EventDetail";
import Form from "../../components/Form";
import Modal from "../../components/Modal";

const EventDetailPage = ({ getEventById, submitEventData, removeEventData }) => {
  const [showEditWindow, setShowEditWindow] = useState(false);
  const { event } = useParams();
  const history = useHistory();
  const currentEvent = getEventById(event);

  const handleRemoveButton = () => {
    removeEventData(currentEvent);
    history.goBack();
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const handleEditPage = () => {
    setShowEditWindow(true);
  };

  const handleSubmittedEvent = (eventData) => {
    submitEventData(eventData);
  };

  return (
    <>
      {currentEvent  &&
        <Modal onClick={handleGoBack}>
          <div className={styles.wrapper}>
            {
              showEditWindow
                ? <Form onSubmit={handleSubmittedEvent} initialFormState={currentEvent}>
                    <button type="submit" onClick={handleRemoveButton}>Remove</button>
                    <button onClick={handleGoBack}>Go Back!</button>
                  </Form>
                : <EventDetail
                    onEdit={handleEditPage}
                    event={currentEvent}
                    onGoBack={handleGoBack}
                  />
            }
          </div>
         </Modal>
      }
    </>
  );
};

export default EventDetailPage;

EventDetailPage.propTypes = {
  getEventById: PropTypes.func.isRequired,
  submitEventData: PropTypes.func.isRequired,
  removeEventData: PropTypes.func.isRequired,
};
