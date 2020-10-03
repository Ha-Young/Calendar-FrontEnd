import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NewEvent from "./NewEvent";

afterEach(cleanup);

it("matches snapshot", () => {
  const utils = render(<NewEvent />);
  expect(utils.container).toMatchSnapshot();
});

it("enables button only when all inputs are entered", () => {
  const { getByText, getByLabelText } = render(<NewEvent />);

  const submitButton = getByText("Submit");
  const eventName = getByLabelText("Event Date");
  const eventDescription = getByLabelText("Event Description");
  const eventDate = getByLabelText("Event Date");

  expect(submitButton).toBeDisabled();

  fireEvent.change(eventName, { target: { value: "Go home!" } });
  fireEvent.change(eventDescription, { target: { value: "Go home!" } });
  fireEvent.change(eventDate, { target: { value: "2020-10-03" } });

  expect(submitButton).toBeDisabled();
});
