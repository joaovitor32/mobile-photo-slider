"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DisplayClose_1 = __importDefault(require("../src/components/DisplayClose"));
const react_native_1 = require("@testing-library/react-native");
const setOpen = jest.fn();
const DisplayCloseComponent = (<DisplayClose_1.default setOpen={setOpen} primaryColor={"#008000"} secondaryColor={"#800080"} testID={"display-close-touchable"}/>);
describe("Display close component", () => {
    it("Testing display close renderization", () => {
        const { getByTestId } = react_native_1.render(DisplayCloseComponent);
        expect(getByTestId("display-close-touchable")).not.toBeNull();
    });
    it("Testing setOpen fireEvent", () => {
        const { getByTestId } = react_native_1.render(DisplayCloseComponent);
        react_native_1.fireEvent.press(getByTestId("display-close-touchable"));
        expect(setOpen).toHaveBeenCalled();
    });
});
