import {BulmaDecorator} from "./decorators/bulma";

const notAcceptedInputTypes = ['reset', 'button', 'submit'];

export class FormtValidation {

    /**
     * Is a Input Element accepted?
     * @param {HTMLElement} element
     */
    static isAcceptedInputType(element) {
        return element.tagName == "INPUT" &&
            notAcceptedInputTypes.findIndex((t) => t === element.type) == -1;
    }


    /**
     * Validation of Form
     * @param {HTMLFormElement} form
     */
    validateForm(form) {
        let formValid = form.checkValidity();
        if (!formValid) {
            for (let element of form.elements) {
                this.validateElement(element);
            }
        }
        return formValid;
    }

    /**
     *
     * @param {HTMLInputElement} element
     */
    validateElement(element) {
        if (FormtValidation.isAcceptedInputType(element)) {
            this._styleElement(element);
            return element.reportValidity();
        } else {
            return false;
        }
    }

    /**
     * Style a InputElement
     * @private
     */
    _styleElement(element) {
        let decorator = new BulmaDecorator();
        if (element.reportValidity()) {
            decorator.success(element);
        } else {
            decorator.error(element);
        }
    }
}