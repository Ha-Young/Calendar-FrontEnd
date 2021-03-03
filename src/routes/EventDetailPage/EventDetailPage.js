import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import styles from "./EventDetailPage.module.css";
import { extractUrl } from "../../utils/ui";

const EventDetailPage = ({ getEvents, onSubmit, onRemove }) => {
  const params = useParams();
  const { date, path } = extractUrl(params.event);
  const history = useHistory();
  const currentEvent = getEvents(date, path)[0];

  const handleRemoveButton = () => {
    onRemove(currentEvent);
    history.goBack(); // 이건 로딩처리 해주면 없어질듯..
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
