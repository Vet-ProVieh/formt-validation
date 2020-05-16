import { BulmaDecorator } from "./decorators/bulma";

export class FormtValidation{

    /**
     * 
     * @param {HTMLInputElement} element 
     */
    validateElement(element){
        this._styleElement(element);
        return element.reportValidity();
    }

    /**+
     * @private
     */
    _styleElement(element){
        let decorator = new BulmaDecorator();
        decorator.error(element);
    }
}