import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Button from "./Button";

afterEach(cleanup);

it("matches snapshot", () => {
  const utils = render(<Button title="Create Event" />);
  expect(utils.container).toMatchSnapshot();
});

it("shows the props correctly", () => {
  const utils = render(<Button title="Create Event" />);
  utils.getByText("Create Event");
});

it("shows the props correctly", () => {
  const utils = render(<Button title="Save" />);
  utils.getByText("Save");
});

it("works click event correctly", () => {
  const onClick = () => console.log("Click");
  const utils = render(<Button title="text" onClick={onClick} />);
  fireEvent.click(utils.getByText("text"), onClick);
});
