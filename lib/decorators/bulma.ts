export class BulmaDecorator {
  /**
     * CSS-ErrorClass
     * @return {string}
     * @constructor
     */
  static get ErrorClass() {
    return 'is-danger';
  }

  /**
     * CSS-SuccessClass
     * @return {string}
     * @constructor
     */
  static get SuccessClass() {
    return 'is-success';
  }

  /**
     * Formatting Success Element
     * @param {HTMLInputElement} element
     */
  success(element: HTMLInputElement) {
    this._removeErrorIfNecessary(element);
    if (!element.classList.contains(BulmaDecorator.SuccessClass)) {
      element.classList.add(BulmaDecorator.SuccessClass);
    }
  }

  /**
     * Formatting Error Element
     * @param {HTMLInputElement} element
     */
  error(element: HTMLInputElement) {
    if (!element.classList.contains(BulmaDecorator.ErrorClass)) {
      element.classList.add(BulmaDecorator.ErrorClass);
      this._attachIcon(element);
    }

    this._removeHelpText(element);
    this._attachErrorMessage(element);
  }

  /**
     *
     * @param {HTMLInputElement} element
     */
  _attachErrorMessage(element: HTMLInputElement) {
    const paragraph = (element.ownerDocument as Document).createElement('p');
    paragraph.classList.add('help', BulmaDecorator.ErrorClass);
    paragraph.innerHTML = element.validationMessage;
    if (element.parentElement) {
      if (element.parentElement.parentElement) {
        element.parentElement.parentElement.appendChild(paragraph);
      }
    }
  }

  /**
     *
     * @param {HTMLInputElement} element
     */
  _attachIcon(element: HTMLInputElement) {
    const document: Document = element.ownerDocument as Document;
    const span = document.createElement('span');
    span.classList.add('icon', 'is-small', 'is-right');
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-exclamation-triangle');
    span.appendChild(i);
    if (element.parentElement) {
      element.parentElement.classList.add('has-icons-right');
      element.parentElement.appendChild(span);
    }
  }


  /**
     * Removing Error
     * @param {HTMLInputElement} element
     */
  _removeErrorIfNecessary(element: HTMLInputElement) {
    if (element.classList.contains(BulmaDecorator.ErrorClass)) {
      element.classList.remove(BulmaDecorator.ErrorClass);

      this._removeErrorIcon(element);
      this._removeHelpText(element);
    }
  }

  /**
     * Removing Icon
     * @param {HTMLInputElement} element
     */
  _removeErrorIcon(element: HTMLInputElement) {
    let parent: HTMLElement = element.parentElement as HTMLElement;

    parent.classList.remove('has-icons-right');
    const span: HTMLSpanElement = parent.lastChild as HTMLSpanElement;
    if (span.tagName == 'SPAN') {
      parent.removeChild(span);
    }
  }

  /**
     * Removing Helptext
     * @param {HTMLInputElement} element
     */
  _removeHelpText(element: HTMLInputElement) {
    if (element.parentElement && element.parentElement.parentElement) {
      const paragraph = element.parentElement.parentElement.lastChild as HTMLElement;

      if (paragraph.tagName == 'P') {
        element.parentElement.parentElement.removeChild(paragraph);
      }
    }
  }
}
