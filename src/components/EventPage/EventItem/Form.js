import React from "react";
import Selector from "./Selector";
import TextArea from "./TextArea";

function Form() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
    }}>
      <TextArea />
      <Selector />
      <button type='submit'>Add Event</button>
    </form>
  );
}

export default Form;
