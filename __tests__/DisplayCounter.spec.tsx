import React from "react";

import DisplayClose from "../src/components/DisplayClose";

import { render } from "@testing-library/react-native";

const setOpen = jest.fn();

const DisplayCloseComponent = (
  <DisplayClose
    setOpen={setOpen}
    primaryColor={"#008000"}
    secondaryColor={"#800080"}
    testID={"display-counter-touchable"}
  />
);

describe("Display close component", () => {
  it("Testing display counter renderization", () => {
    const { getByTestId } = render(DisplayCloseComponent);
    expect(getByTestId("display-counter-touchable")).not.toBeNull();
  });
});
