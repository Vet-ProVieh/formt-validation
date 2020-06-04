import { BulmaDecorator } from './decorators/bulma';

const notAcceptedInputTypes = ['reset', 'button', 'submit'];

export class FormtValidation {
  /**
     * Is a Input Element accepted?
     * @param {HTMLInputElement} element
     */
  static isAcceptedInputType(element: HTMLInputElement) {
    return element.tagName == 'INPUT' &&
      notAcceptedInputTypes.findIndex((t) => t === element.type) == -1;
  }


  /**
     * Validation of Form
     * @param {HTMLFormElement} form
     */
  validateForm(form: HTMLFormElement) {
    const formValid = form.checkValidity();
    if (!formValid) {
      for (const element of form.elements) {
        this.validateElement(element as HTMLInputElement);
      }
    }
    return formValid;
  }

  /**
     *
     * @param {HTMLInputElement} element
     */
  validateElement(element: HTMLInputElement) {
    if (FormtValidation.isAcceptedInputType(element)) {
      this._styleElement(element);
      return element.reportValidity();
    } else {
      return false;
    }
  }

  /**
     * Style a InputElement
     * @param {HTMLInputElement} element
     * @private
     */
  _styleElement(element: HTMLInputElement) {
    const decorator = new BulmaDecorator();
    if (element.reportValidity()) {
      decorator.success(element);
    } else {
      decorator.error(element);
    }
  }
}
