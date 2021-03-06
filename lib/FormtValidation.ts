import {BulmaDecorator} from './decorators/bulma';

const notAcceptedInputTypes = ['reset', 'button', 'submit'];

/**
 * Facade for Form-Validation.
 */
export class FormtValidation {
  private static CHECKABLE_TAGS = ['TEXTAREA', 'SELECT', 'INPUT'];


  private _decorator : IDecorator;

  /**
   * DefaultContructor
   * @param {IDecorator} decorator
   */
  public constructor(decorator: IDecorator = new BulmaDecorator()) {
    this._decorator = decorator;
  }

  /**
     * Is a Input Element accepted?
     * @param {HTMLInputElement} element
     * @return {boolean}
     */
  static isAcceptedInputType(element: HTMLInputElement): boolean {
    return FormtValidation.CHECKABLE_TAGS.includes(element.tagName) &&
      notAcceptedInputTypes.findIndex((t) => t === element.type) == -1;
  }


  /**
     * Validation of Form
     * @param {HTMLFormElement} form
     * @return {boolean}
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
     * Validation of an InputElement
     * @param {HTMLInputElement} element
     * @return {boolean}
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
    if (element.reportValidity()) {
      this._decorator.success(element);
    } else {
      this._decorator.error(element);
    }
  }
}
