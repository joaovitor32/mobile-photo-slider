"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const data_1 = __importDefault(require("../data/data"));
const src_1 = __importDefault(require("../src"));
const react_native_2 = require("@testing-library/react-native");
const setOpen = jest.fn();
const CarouselComponent = (<src_1.default setOpen={setOpen} photos={data_1.default} primaryColor={"white"} secondaryColor={"orange"} open={false}/>);
const EmptyCarouselComponent = (<src_1.default setOpen={setOpen} photos={[]} primaryColor={"white"} secondaryColor={"orange"} open={false}/>);
describe("Carousel component", () => {
    it("Testing Flatlist renderization", () => {
        const { getByTestId } = react_native_2.render(CarouselComponent);
        expect(getByTestId("flat-list")).not.toBeNull();
    });
    it("Testing Flatlist - photos empty array", () => {
        const { getByTestId } = react_native_2.render(EmptyCarouselComponent);
        expect(getByTestId("loading-box")).not.toBeNull();
    });
    it("Testing display close and display counter components", () => {
        const { getByTestId } = react_native_2.render(CarouselComponent);
        expect(getByTestId("display-counter")).not.toBeNull();
        expect(getByTestId("display-close")).not.toBeNull();
    });
    it("Testing flatlist content length", () => {
        const { getByTestId } = react_native_2.render(CarouselComponent);
        expect(getByTestId("flat-list").props.data.length).toBe(data_1.default.length);
    });
    it("Testing fire press event", () => {
        const { getByTestId } = react_native_2.render(CarouselComponent);
        const animatedSpyOn = jest.spyOn(react_native_1.Animated, "timing");
        react_native_2.fireEvent.press(getByTestId("display-close"));
        expect(animatedSpyOn).toHaveBeenCalled();
    });
});
