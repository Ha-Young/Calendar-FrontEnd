import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import styles from "./EventDetailPage.module.css";
import { extractUrl } from "../../utils/ui";

const EventDetailPage = ({ getEventById, onSubmit, onRemove }) => {
  const { event } = useParams();
  const history = useHistory();
  const currentEvent = getEventById(event);

  const handleRemoveButton = () => {
    onRemove(currentEvent);
    history.goBack();
  };

  return (
    <>
      <Form onSubmit={onSubmit} initialState={currentEvent}>
        <button type="submit" onClick={handleRemoveButton}>Remove</button>
      </Form>
    </>
  );
};

export default EventDetailPage;
