import React from "react";
import { Link } from "react-router-dom";


function EventCreationButton({ onClick }) {
  return (
    <Link to="/events/new">
      <button onClick={onClick}>이벤트 생성</button>
    </Link>
  );
}

export default EventCreationButton;
