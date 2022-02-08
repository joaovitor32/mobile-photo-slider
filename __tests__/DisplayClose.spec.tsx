import React from "react";

import DisplayClose from "../src/components/DisplayClose";

import { render, fireEvent } from "@testing-library/react-native";

const setOpen = jest.fn();

const DisplayCloseComponent = (
  <DisplayClose
    setOpen={setOpen}
    primaryColor={"#008000"}
    secondaryColor={"#800080"}
    testID={"display-close-touchable"}
  />
);

describe("Display close component", () => {
  it("Testing display close renderization", () => {
    const { getByTestId } = render(DisplayCloseComponent);
    expect(getByTestId("display-close-touchable")).not.toBeNull();
  });

  it("Testing setOpen fireEvent", () => {
    const { getByTestId } = render(DisplayCloseComponent);
    fireEvent.press(getByTestId("display-close-touchable"));
    expect(setOpen).toHaveBeenCalled();
  });
});
