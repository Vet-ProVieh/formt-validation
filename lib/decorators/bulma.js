
export class BulmaDecorator {


    /**
     * @param {HTMLInputElement} element
     */
    error(element) {
        if (!element.classList.contains("is-danger")) {
            element.classList.add("is-danger");
            this._attachIcon(element);
            this._attachErrorMessage(element);
        }
    }

    /**
     * 
     * @param {HTMLInputElement} element 
     */
    _attachErrorMessage(element, message = "NOT VALID") {
        let paragraph = element.ownerDocument.createElement("p");
        paragraph.classList.add("help", "is-danger");
        paragraph.innerHTML = message;
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
}