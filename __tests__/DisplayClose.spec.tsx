import React from "react";

import DisplayCounter from "../src/components/DisplayCounter";

import { render, fireEvent } from "@testing-library/react-native";

const DisplayCloseComponent = (
  <DisplayCounter
    primaryColor={"#008000"}
    secondaryColor={"#800080"}
    indexImage={0}
    testID={"display-close-touchable"}
  />
);

describe("Display close component", () => {
  it("Testing display close renderization", () => {
    const { getByTestId } = render(DisplayCloseComponent);
    expect(getByTestId("display-close-touchable")).not.toBeNull();
  });
});
