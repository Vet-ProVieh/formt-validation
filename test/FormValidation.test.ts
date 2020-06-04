import { FormtValidation } from "../lib/FormtValidation";

describe("isAcceptedInputType", () => {

    test("input is an acceptable element", () => {
        const inputElement: HTMLInputElement = document.createElement("input");

        expect(FormtValidation.isAcceptedInputType(inputElement)).toBe(true);
    })

    test("input type button is not an acceptable element", () => {
        const inputElement: HTMLInputElement = document.createElement("input");
        inputElement.type = "button";
        
        expect(FormtValidation.isAcceptedInputType(inputElement)).toBe(false);
    })
});