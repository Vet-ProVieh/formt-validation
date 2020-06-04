"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormtValidation = void 0;
const bulma_1 = require("./decorators/bulma");
const notAcceptedInputTypes = ['reset', 'button', 'submit'];
/**
 * Facade for Form-Validation.
 */
class FormtValidation {
    /**
       * Is a Input Element accepted?
       * @param {HTMLInputElement} element
       * @return {boolean}
       */
    static isAcceptedInputType(element) {
        return element.tagName == 'INPUT' &&
            notAcceptedInputTypes.findIndex((t) => t === element.type) == -1;
    }
    /**
       * Validation of Form
       * @param {HTMLFormElement} form
       * @return {boolean}
       */
    validateForm(form) {
        const formValid = form.checkValidity();
        if (!formValid) {
            for (const element of form.elements) {
                this.validateElement(element);
            }
        }
        return formValid;
    }
    /**
       * Validation of an InputElement
       * @param {HTMLInputElement} element
       * @return {boolean}
       */
    validateElement(element) {
        if (FormtValidation.isAcceptedInputType(element)) {
            this._styleElement(element);
            return element.reportValidity();
        }
        else {
            return false;
        }
    }
    /**
       * Style a InputElement
       * @param {HTMLInputElement} element
       * @private
       */
    _styleElement(element) {
        const decorator = new bulma_1.BulmaDecorator();
        if (element.reportValidity()) {
            decorator.success(element);
        }
        else {
            decorator.error(element);
        }
    }
}
exports.FormtValidation = FormtValidation;
