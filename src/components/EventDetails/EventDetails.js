import React from "react";

export default function EventDetails({ inputData }) {
  const {
    title,
    content,
    year,
    month,
    date,
    fromHour,
    toHour,
  } = inputData;

  return (
    <>
      <header>Event Details</header>
      <div>
        <span>Title:</span>
        <h2>{title}</h2>
      </div>
      <div>
        <span>Year:</span>
        <h3>{year}</h3>
        <span>Month:</span>
        <h3>{month}</h3>
        <span>Date:</span>
        <h3>{date}</h3>
        <span>From:</span>
        <h3>{fromHour}</h3>
        <span>To:</span>
        <h3>{toHour}</h3>
      </div>
      <div>
        <span>Content:</span>
        <h3>{content}</h3>
      </div>
      <button>수정</button>
      <button>삭제</button>
    </>
  )
}
