import React from "react";

import photos from "../data/data";
import DisplayClose from "../src/components/DisplayClose";

import { render, fireEvent, waitFor } from "@testing-library/react-native";

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

  it("Testing is setOpen is being called", async () => {
    const { getByTestId } = render(DisplayCloseComponent);
    const displayCloseTouchable = getByTestId("display-close-touchable");

    fireEvent.press(displayCloseTouchable);

    expect(setOpen).toHaveBeenCalled();
  });
});
