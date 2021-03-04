import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { getTimeIndex } from "../../../utils/getTimeIndex";
import Selector from "./Selector";
import TextArea from "./TextArea";
import { addEvent } from "../../../actions/index";

function Form({ currentDay, handleSubmit }) {
  const [text, setText] = useState({ title: "", description: "" });
  const fromRef = useRef();
  const toRef = useRef();

  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      const event = {
        currentDay,
        ...text,
        from: getTimeIndex.from(fromRef.current.value),
        to: getTimeIndex.to(toRef.current.value) + 1,
      };

      handleSubmit(event);
    }}>
      <TextArea
        text={{...text}}
        updateText={setText}
      />
      <Selector fromRef={fromRef} toRef={toRef} />
      <button type='submit'>Add Event</button>
    </form>
  );
}

function mapStateToProps({ currentDay }) {
  return { currentDay };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (event) => dispatch(addEvent(event)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
