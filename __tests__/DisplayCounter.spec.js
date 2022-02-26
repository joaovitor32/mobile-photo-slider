"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DisplayCounter_1 = __importDefault(require("../src/components/DisplayCounter"));
const react_native_1 = require("@testing-library/react-native");
const DisplayCloseComponent = (index) => {
    return (<DisplayCounter_1.default primaryColor={"#008000"} secondaryColor={"#800080"} indexImage={index} testID={"display-counter-touchable"}/>);
};
describe("Display counter component", () => {
    it("Testing display counter renderization", () => {
        const { getByTestId } = react_native_1.render(DisplayCloseComponent(0));
        expect(getByTestId("display-counter-touchable")).not.toBeNull();
    });
    it("Testing initial component style", () => {
        const { getByTestId } = react_native_1.render(DisplayCloseComponent(0));
        const view = getByTestId("display-counter-touchable");
        expect(view.props.style.opacity).toBe(0);
        expect(view.props.style.transform[0].translateX).toBe(10);
    });
});
