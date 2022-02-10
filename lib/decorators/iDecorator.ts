/**
 * Decorator-Interface for FormtValidation
 */
interface IDecorator {

    /**
    * Formatting Success Element
    * @param {HTMLInputElement} element
    */
    success(element: HTMLInputElement): void;

    /**
   * Formatting Error Element
   * @param {HTMLInputElement} element
   */
    error(element: HTMLInputElement): void;
}
