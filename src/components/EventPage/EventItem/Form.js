import React, { useRef, useState } from "react";
import Selector from "../../../containers/EventContainer/SelectorContainer";
import TextArea from "./TextArea";
import { FORM_ID } from "../../../constants/common";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import PropTypes from "prop-types";

function Form({
  currentDay,
  formId,
  dispatchedAddEvent,
  dispatchedEditEvent,
  history,
  date = currentDay,
  title = "",
  description = "",
  from = null,
  to = null,
  id = new Date().getTime()
}) {
  const [text, setText] = useState({ title, description });
  const fromRef = useRef();
  const toRef = useRef();

  const handleSubmit = () => {
    const event = {
      id,
      date,
      ...text,
      from: getTimeIndex.fromIndex(fromRef.current.value),
      to: getTimeIndex.toIndex(toRef.current.value) + 1,
    };

    if (formId === FORM_ID.ADD) {
      dispatchedAddEvent(event);
    }

    if (formId === FORM_ID.EDIT) {
      dispatchedEditEvent(event);
    }

    history.goBack();
  };

  return (
    <form
      id={formId}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <TextArea
        text={{...text}}
        updateText={setText}
      />
      <Selector props={{ fromRef, toRef, from, to }} />
    </form>
  );
}

export default Form;

Form.propTypes = {
  currentDay: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  dispatchedAddEvent: PropTypes.func,
  dispatchedEditEvent: PropTypes.func,
  history: PropTypes.object.isRequired,
};
