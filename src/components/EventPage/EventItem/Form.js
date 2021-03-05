import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import Selector from "./Selector";
import TextArea from "./TextArea";
import { addEvent } from "../../../actions/index";
import { FORM_ID } from "../../../constants/common";

function Form({
  currentDay,
  dispatchedAddEvent,
  dispatchedEditEvent,
  history,
  formId,
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

  function handleSubmit() {
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
  }

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

function mapStateToProps({ currentDay }) {
  return { currentDay };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchedAddEvent: (event) => dispatch(addEvent(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
