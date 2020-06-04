/**
 * Decorator for CSS-Framework bulma.io
 */
export declare class BulmaDecorator {
    /**
       * CSS-ErrorClass
       * @return {string}
       * @constructor
       */
    static get ErrorClass(): string;
    /**
       * CSS-SuccessClass
       * @return {string}
       * @constructor
       */
    static get SuccessClass(): string;
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
    /**
       *
       * @param {HTMLInputElement} element
       */
    _attachErrorMessage(element: HTMLInputElement): void;
    /**
       *
       * @param {HTMLInputElement} element
       */
    _attachIcon(element: HTMLInputElement): void;
    /**
       * Removing Error
       * @param {HTMLInputElement} element
       */
    _removeErrorIfNecessary(element: HTMLInputElement): void;
    /**
     * Removing Success Class
     * @param {HTMLInputElement} element
     */
    _removeSuccessIfNecessary(element: HTMLInputElement): void;
    /**
       * Removing Icon
       * @param {HTMLInputElement} element
       */
    _removeErrorIcon(element: HTMLInputElement): void;
    /**
       * Removing Helptext
       * @param {HTMLInputElement} element
       */
    _removeHelpText(element: HTMLInputElement): void;
}
//# sourceMappingURL=bulma.d.ts.map