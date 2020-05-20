export class BulmaDecorator {

    /**
     * CSS-ErrorClass
     * @returns {string}
     * @constructor
     */
    static get ErrorClass() {
        return "is-danger";
    }

    /**
     * CSS-SuccessClass
     * @returns {string}
     * @constructor
     */
    static get SuccessClass() {
        return "is-success";
    }

    /**
     * Formatting Success Element
     * @param {HTMLInputElement} element
     */
    success(element) {
        this._removeErrorIfNecessary(element);
        if (!element.classList.contains(BulmaDecorator.SuccessClass)) {
            element.classList.add(BulmaDecorator.SuccessClass);
        }
    }

    /**
     * Formatting Error Element
     * @param {HTMLInputElement} element
     */
    error(element) {
        if (!element.classList.contains(BulmaDecorator.ErrorClass)) {
            element.classList.add(BulmaDecorator.ErrorClass);
            this._attachIcon(element);
            this._attachErrorMessage(element);
        }
    }

    /**
     * 
     * @param {HTMLInputElement} element 
     */
    _attachErrorMessage(element) {
        let paragraph = element.ownerDocument.createElement("p");
        paragraph.classList.add("help", BulmaDecorator.ErrorClass);
        paragraph.innerHTML = element.validationMessage;
        element.parentElement.parentElement.appendChild(paragraph);
    }

    /**
     * 
     * @param {HTMLInputElement} element 
     */
    _attachIcon(element) {

        let span = element.ownerDocument.createElement("span");
        span.classList.add("icon", "is-small", "is-right");
        let i = element.ownerDocument.createElement("i");
        i.classList.add("fas", "fa-exclamation-triangle");
        span.appendChild(i);
        element.parentElement.classList.add("has-icons-right");
        element.parentElement.appendChild(span);
    }


    /**
     * Removing Error
     * @param {HTMLInputElement} element
     */
    _removeErrorIfNecessary(element){
        if(element.classList.contains(BulmaDecorator.ErrorClass)){
            element.classList.remove(BulmaDecorator.ErrorClass);

            this._removeErrorIcon(element);
            this._removeHelpText(element);
        }
    }
    /**
     * Removing Icon
     * @param {HTMLInputElement} element
     */
    _removeErrorIcon(element){
        element.parentElement.classList.remove("has-icons-right");
        let span = element.parentElement.lastChild;
        element.parentElement.removeChild(span);
    }

    /**
     * Removing Helptext
     * @param {HTMLInputElement} element
     */
    _removeHelpText(element){
        let paragraph = element.parentElement.parentElement.lastChild;
        element.parentElement.parentElement.removeChild(paragraph);
    }
}