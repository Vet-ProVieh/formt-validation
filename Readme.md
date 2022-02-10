# Formt-Validation: A simple Validation-Component
This component helps to style a HTML-form with Bulma-CSS Stylesheets. 

## Usage
You have to call the Method `validateForm()` on class `FormtValidation` and hand over the Form-Element to validate. All input or Textareas which
are invalid are marked.

Example:

```javascript
let validator = new FormtValidation();
let form = document.querySelector("form");

let valid = validator.validateForm(form);
```

## Extend
If you want to extend FormtValidation for another CSS-Framework you can use the Interface `IDecorator`. Here a simple example:


```javascript

class MyDecorator implements IDecorator {
    success(element: HTMLInputElement) {
        // Style your Element
    }

    error(element: HTMLInputElement) {
        // Style your Element
    }
}

let decorator = new MyDecorator();
let validator = new FormtValidation(decorator);
let form = document.querySelector("form");

let valid = validator.validateForm(form);

```