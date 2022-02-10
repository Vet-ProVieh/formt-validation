import { FormtValidation } from "../lib/FormtValidation";
import { BulmaDecorator } from "../lib/decorators/bulma";


const formt: FormtValidation = new FormtValidation();

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


describe("validateForm", () => {

    /**
     * Building Testfrm
     * @return {HTMLFormElement}
     */
    function buildForm() : HTMLFormElement {
        const form = document.createElement("form");
        const input = document.createElement("input");
        input.required = true;
        const button = document.createElement("input");
        button.type="submit";
        form.appendChild(input);
        form.appendChild(button);
        return form;
    }


    test("should return form validity", () => {
        const form = buildForm();
        const element: HTMLInputElement = form.elements[0] as HTMLInputElement;

        expect(formt.validateForm(form)).toBe(false)
        expect(element.reportValidity()).toBe(false)

        element.value = "test";
        
        expect(formt.validateForm(form)).toBe(true)
        expect(element.reportValidity()).toBe(true)
    })
})


describe("validateElement", () => {

    function buildRequiredElement() {
        const div = document.createElement("div");
        const controlDiv = document.createElement("div");
        controlDiv.classList.add("control");
        const input = document.createElement("input");
        input.required = true;
        div.appendChild(controlDiv);
        controlDiv.appendChild(input);
        return input;
    }

    function buildButtonElement(){
        let button = document.createElement("input");
        button.type = "button"
        return button
    }

    test('do not style button', () => {
        const element = buildButtonElement();

        expect(formt.validateElement(element)).toBe(false);

        expect(element.classList.contains(BulmaDecorator.SuccessClass)).toBe(false);
        expect(element.classList.contains(BulmaDecorator.ErrorClass)).toBe(false);
    });

    test("test valid element style", () => {
        const element: HTMLInputElement = buildRequiredElement();    
        element.value ="Test";

        expect(formt.validateElement(element)).toBe(true);
        expect(formt.validateElement(element)).toBe(true);
        expect(element.classList.contains(BulmaDecorator.SuccessClass)).toBe(true);
        expect(element.classList.contains(BulmaDecorator.ErrorClass)).toBe(false);
    })

    test("test invalid element style", () => {
        const element: HTMLInputElement = buildRequiredElement();    
        const parent: HTMLDivElement = element.parentElement as HTMLDivElement;

        expect(formt.validateElement(element)).toBe(false);
        expect(formt.validateElement(element)).toBe(false);
        expect(element.classList.contains(BulmaDecorator.SuccessClass)).toBe(false);
        expect(element.classList.contains(BulmaDecorator.ErrorClass)).toBe(true);

        const iconSpan = parent.getElementsByTagName("span")[0];
        expect(iconSpan.classList.contains("icon")).toBe(true);
        expect(iconSpan.classList.contains("is-small")).toBe(true);
        expect(iconSpan.classList.contains("is-right")).toBe(true);

        const iconI = iconSpan.getElementsByTagName("i")[0];
        expect(iconI.classList.contains("fas")).toBe(true);
        expect(iconI.classList.contains("fa-exclamation-triangle")).toBe(true);
    })

    test("remove invalid style after success", () => {
        const element: HTMLInputElement = buildRequiredElement();    
        const parent: HTMLDivElement = element.parentElement as HTMLDivElement;

        expect(formt.validateElement(element)).toBe(false);
        
        element.value = "test";

        expect(formt.validateElement(element)).toBe(true);
        expect(element.classList.contains(BulmaDecorator.SuccessClass)).toBe(true);
        expect(element.classList.contains(BulmaDecorator.ErrorClass)).toBe(false);
        expect(parent.getElementsByTagName("span").length).toBe(0)
    })

    test("remove valid style after error", () => {
        const element: HTMLInputElement = buildRequiredElement();    
        const parent: HTMLDivElement = element.parentElement as HTMLDivElement;

        element.value = "test";
        expect(formt.validateElement(element)).toBe(true);
        element.value = "";
        expect(formt.validateElement(element)).toBe(false);
        expect(element.classList.contains(BulmaDecorator.SuccessClass)).toBe(false);
        expect(element.classList.contains(BulmaDecorator.ErrorClass)).toBe(true);
    })
    
})