import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import EventDetail from "./EventDetail";
import Form from "../../components/Form/Form";
import Modal from "../../components/Modal/Modal";
import styles from "./EventDetailPage.module.css";

const EventDetailPage = ({ getEventById, onSubmit, onRemove }) => {
  const [showEditWindow, setShowEditWindow] = useState(false);
  const { event } = useParams();
  const history = useHistory();
  const currentEvent = getEventById(event);
  window.scrollTo(0, 0);
  const handleRemoveButton = () => {
    onRemove(currentEvent);
    history.goBack();
  };

  const handleGoBack = () => {
    history.goBack();
  };

  const handleEditPage = () => {
    setShowEditWindow(true);
  };

  const handleSubmittedEvent = (eventData) => {
    onSubmit(eventData);
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
