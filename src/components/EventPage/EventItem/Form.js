import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import Selector from "./Selector";
import TextArea from "./TextArea";
import { addEvent } from "../../../actions/index";

function Form({
  currentDay,
  dispatchedAddEvent,
  history,
  formId,
  title = "",
  description = "",
  from = null,
  to = null,
}) {
  console.log(formId)
  const [text, setText] = useState({ title, description });
  const fromRef = useRef();
  const toRef = useRef();

  function addEvent(e) {
    e.preventDefault();

    const event = {
      currentDay,
      ...text,
      from: getTimeIndex.from(fromRef.current.value),
      to: getTimeIndex.to(toRef.current.value) + 1,
    };

    dispatchedAddEvent(event);
    history.goBack();
  }

  return (
    <form
      id={formId}
      onSubmit={(e) => addEvent(e)}>
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
