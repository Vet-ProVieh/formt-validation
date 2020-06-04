"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BulmaDecorator = void 0;
/**
 * Decorator for CSS-Framework bulma.io
 */
class BulmaDecorator {
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
        this._removeSuccessIfNecessary(element);
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
    _attachErrorMessage(element) {
        const paragraph = element.ownerDocument.createElement('p');
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
    _attachIcon(element) {
        const document = element.ownerDocument;
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
    _removeErrorIfNecessary(element) {
        if (element.classList.contains(BulmaDecorator.ErrorClass)) {
            element.classList.remove(BulmaDecorator.ErrorClass);
            this._removeErrorIcon(element);
            this._removeHelpText(element);
        }
    }
    /**
     * Removing Success Class
     * @param {HTMLInputElement} element
     */
    _removeSuccessIfNecessary(element) {
        if (element.classList.contains(BulmaDecorator.SuccessClass)) {
            element.classList.remove(BulmaDecorator.SuccessClass);
        }
    }
    /**
       * Removing Icon
       * @param {HTMLInputElement} element
       */
    _removeErrorIcon(element) {
        const parent = element.parentElement;
        parent.classList.remove('has-icons-right');
        const span = parent.lastChild;
        if (span.tagName == 'SPAN') {
            parent.removeChild(span);
        }
    }
    /**
       * Removing Helptext
       * @param {HTMLInputElement} element
       */
    _removeHelpText(element) {
        if (element.parentElement && element.parentElement.parentElement) {
            const parentParent = element.parentElement.parentElement;
            const paragraph = parentParent.lastChild;
            if (paragraph.tagName == 'P') {
                parentParent.removeChild(paragraph);
            }
        }
    }
}
exports.BulmaDecorator = BulmaDecorator;