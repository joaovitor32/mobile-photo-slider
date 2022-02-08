import React from "react";
import { Animated } from "react-native";

import photos from "../data/data";
import Carousel from "../src/Carousel";

import { render, fireEvent } from "@testing-library/react-native";

const setOpen = jest.fn();

const CarouselComponent = (
  <Carousel
    setOpen={setOpen}
    photos={photos}
    primaryColor={"white"}
    secondaryColor={"orange"}
    open={false}
  />
);

const EmptyCarouselComponent = (
  <Carousel
    setOpen={setOpen}
    photos={[]}
    primaryColor={"white"}
    secondaryColor={"orange"}
    open={false}
  />
);

describe("Carousel component", () => {
  it("Testing Flatlist renderization", () => {
    const { getByTestId } = render(CarouselComponent);
    expect(getByTestId("flat-list")).not.toBeNull();
  });

  it("Testing Flatlist - photos empty array", () => {
    const { getByTestId } = render(EmptyCarouselComponent);
    expect(getByTestId("loading-box")).not.toBeNull();
  });

  it("Testing display close and display counter components", () => {
    const { getByTestId } = render(CarouselComponent);

    expect(getByTestId("display-counter")).not.toBeNull();
    expect(getByTestId("display-close")).not.toBeNull();
  });
  it("Testing flatlist content length", () => {
    const { getByTestId } = render(CarouselComponent);

    expect(getByTestId("flat-list").props.data.length).toBe(photos.length);
  });
  it("Testing fire press event", () => {
    const { getByTestId } = render(CarouselComponent);

    const animatedSpyOn = jest.spyOn(Animated, "timing");

    fireEvent.press(getByTestId("display-close"));

    expect(animatedSpyOn).toHaveBeenCalled();
  });
});
