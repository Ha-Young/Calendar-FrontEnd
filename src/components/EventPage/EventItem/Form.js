import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import SelectContainer from "../../../containers/EventContainer/SelectContainer";
import TextContainer from "./TextContainer";
import { FORM_ID, PERIOD_UNIT } from "../../../constants/common";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import PropTypes from "prop-types";
import { CALENDAR } from "../../../constants/address";

function Form({
  period,
  currentDay,
  formId,
  dispatchAddEvent,
  dispatchedEditEvent,
  date = currentDay,
  title = "",
  description = "",
  from = null,
  to = null,
  id = new Date().getTime(),
}) {
  const [text, setText] = useState({ title, description });
  const history = useHistory();
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

    switch (formId) {
      case FORM_ID.ADD:
        dispatchAddEvent(event);
        break;
      case FORM_ID.EDIT:
        dispatchedEditEvent(event);
        break;
    }

    switch (period) {
      case PERIOD_UNIT.DAY:
        history.push(CALENDAR.DAY);
        return;
      case PERIOD_UNIT.WEEK:
        history.push(CALENDAR.WEEK);
        return;
    }
  };

  return (
    <form
      id={formId}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
      <TextContainer
        text={text}
        updateText={setText}
      />
      <SelectContainer props={{ from, to, fromRef, toRef }} />
    </form>
  );
}

export default Form;

Form.propTypes = {
  currentDay: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  dispatchAddEvent: PropTypes.func,
  dispatchedEditEvent: PropTypes.func,
};
