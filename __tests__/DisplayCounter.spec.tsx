import React from "react";

import DisplayCounter from "../src/components/DisplayCounter";

import { render } from "@testing-library/react-native";

const DisplayCloseComponent = (index: number): any => {
  return (
    <DisplayCounter
      primaryColor={"#008000"}
      secondaryColor={"#800080"}
      indexImage={index}
      testID={"display-counter-touchable"}
    />
  );
};

describe("Display counter component", () => {
  it("Testing display counter renderization", () => {
    const { getByTestId } = render(DisplayCloseComponent(0));
    expect(getByTestId("display-counter-touchable")).not.toBeNull();
  });
  it("Testing initial component style", () => {
    const { getByTestId } = render(DisplayCloseComponent(0));
    const view = getByTestId("display-counter-touchable");

    expect(view.props.style.opacity).toBe(0);
    expect(view.props.style.transform[0].translateX).toBe(10);
  });
});
