import React, { useState } from "react";
import styled from "styled-components";
import Desc from "./Desc";
import EndTime from "./EndTime";
import StartTime from "./StartTime";
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

const DATA_TYPE = {
  TITLE: "TITLE",
  DESC: "DESC",
  START_DATE: "START_DATE",
  START_HOUR: "START_HOUR",
  END_DATE: "END_DATE",
  END_HOUR: "END_HOUR",
};

const Main = () => {
  const [addingData, setAddingData] = useState({
    title: "",
    desc: "",
    startDate: "",
    startHour: "",
    endDate: "",
    endHour: "",
  });

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log(addingData);
  };

  const saveData = (data, type) => {
    switch (type) {
      case DATA_TYPE.TITLE:
        return setAddingData({
          ...addingData,
          title: data
        });
      case DATA_TYPE.DESC:
        return setAddingData({
          ...addingData,
          desc: data
        });
      case DATA_TYPE.START_DATE:
        return setAddingData({
          ...addingData,
          startDate: data
        });
      case DATA_TYPE.START_HOUR:
        return setAddingData({
          ...addingData,
          startHour: data
        })
      case DATA_TYPE.END_DATE:
        return setAddingData({
          ...addingData,
          endDate: data
        });
      case DATA_TYPE.END_HOUR:
        return setAddingData({
          ...addingData,
          endHour: data
        });
      default:
        return;
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Title saveData={saveData} dataType={DATA_TYPE} />
        <Desc saveData={saveData} dataType={DATA_TYPE} />
        <StartTime saveData={saveData} dataType={DATA_TYPE} />
        <EndTime saveData={saveData} dataType={DATA_TYPE} />
        <SubmitBtn />
      </div>
    </Form>
  );
};

export default Main;
