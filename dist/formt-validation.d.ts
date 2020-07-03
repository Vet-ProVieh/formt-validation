/**
 * Facade for Form-Validation.
 */
export class FormtValidation {
    /**
       * Is a Input Element accepted?
       * @param {HTMLInputElement} element
       * @return {boolean}
       */
    static isAcceptedInputType(element: HTMLInputElement): boolean;
    /**
       * Validation of Form
       * @param {HTMLFormElement} form
       * @return {boolean}
       */
    validateForm(form: HTMLFormElement): boolean;
    /**
       * Validation of an InputElement
       * @param {HTMLInputElement} element
       * @return {boolean}
       */
    validateElement(element: HTMLInputElement): boolean;
    /**
       * Style a InputElement
       * @param {HTMLInputElement} element
       * @private
       */
    private _styleElement;
}