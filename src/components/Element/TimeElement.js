import React from "react";
import randomIndex from "../../utils/randomIndex";
import EventElement from "./EventElement";
import PlainElement from "./PlainElement";

export default function TimeElement({ list }) {
  const HOURS = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];

  return (
    HOURS.map((hour, index) => {
      return (
        list[hour]
        ? <EventElement key={randomIndex()} hour={hour} title={list[hour].title} />
        : <PlainElement key={randomIndex()} hour={hour} />
      );
    })
  );
}
