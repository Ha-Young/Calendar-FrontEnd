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
  TITLE: "title",
  DESC: "desc",
  START_TIME: "startTime",
  END_TIME: "endTime",
};

const Main = () => {
  const [addingData, setAddingData] = useState({
    title: "",
    desc: "",
    startTime: "",
    endTime: "",
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
      case DATA_TYPE.START_TIME:
        return setAddingData({
          ...addingData,
          startTime: data
        });
      case DATA_TYPE.END_TIME:
        return setAddingData({
          ...addingData,
          endTime: data
        });
      default:
        return;
    }
  };

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
