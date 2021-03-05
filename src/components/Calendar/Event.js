import React, { useEffect, useState } from "react";
import styled from "styled-components";
import EventModal from "../Modal/EventModal";

const StyledEvent = styled.div`
  position: absolute;
  width: 100%;
  border-radius: 5px;
  height: ${(props) => `${25 * props.height}px`};
  background-color: brown;
  z-index: 10;
`;

export default function Event({
  id,
  height,
  title,
  description,
  onDeleteEvent,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StyledEvent
        height={height}
        onClick={(e) => {
          e.stopPropagation();
          showModal();
        }}
      >
        <h2 style={{ color: "white" }}>{title}</h2>
        <h3 style={{ color: "white" }}>{description}</h3>
      </StyledEvent>
      <EventModal
        isModalVisible={isModalVisible}
        handleOk={() => handleOk()}
        handleCancel={() => handleCancel()}
        onDeleteEvent={onDeleteEvent}
        eventInfo={{ id, title, description }}
      />
    </>
  );
}
