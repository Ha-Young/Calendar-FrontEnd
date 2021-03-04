import React, { useState } from "react";
import styled from "styled-components";
import Desc from "./Desc";
import EndDate from "./EndDate";
import EndHour from "./EndHour";
import StartDate from "./StartDate";
import StartHour from "./StartHour";
import SubmitBtn from "./SubmitBtn";
import Title from "./Title";

const Form = styled.form`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 30em;
  padding: 0 5em 0;
  padding-top: 8em;

  div {
    position: relative;
  }
`;

const Event = ({ onSubmit }) => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    startDate: "",
    startHour: "",
    endDate: "",
    endHour: "",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(event);
    console.log(event);
  };

  const onInputSubmit = (prop) => (value) => {
    setEvent({
      ...event,
      [prop]: value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Title saveData={onInputSubmit("title")} />
        <Desc saveData={onInputSubmit("description")} />
        <div>
          <StartDate saveData={onInputSubmit("startDate")} />
          <StartHour saveData={onInputSubmit("startHour")} />
        </div>
        <div>
          <EndDate saveData={onInputSubmit("endDate")} />
          <EndHour saveData={onInputSubmit("endHour")} />
        </div>
        <SubmitBtn />
      </div>
    </Form>
  );
};

export default Event;

// const saveData = (data, type) => {
//   switch (type) {
//     case DATA_TYPE.TITLE:
//       return setAddingData({
//         ...addingData,
//         title: data
//       });
//     case DATA_TYPE.DESC:
//       return setAddingData({
//         ...addingData,
//         desc: data
//       });
//     case DATA_TYPE.START_DATE:
//       return setAddingData({
//         ...addingData,
//         startDate: data
//       });
//     case DATA_TYPE.START_HOUR:
//       return setAddingData({
//         ...addingData,
//         startHour: data
//       })
//     case DATA_TYPE.END_DATE:
//       return setAddingData({
//         ...addingData,
//         endDate: data
//       });
//     case DATA_TYPE.END_HOUR:
//       return setAddingData({
//         ...addingData,
//         endHour: data
//       });
//     default:
//       return;
//   }
// };