# Validable form (HTML5, CSS3, vanilla JS)

## Instalation

Just copy the code to your website. It's made with HTML5, CSS3 and vanilla JS only.
No framework and/or libraries needed.

## Customization

### Appearance

If you need to adjust the form to your website just change the value of those variables in **style.css**:

```CSS
:root {
  --color-success: #2ecc72;
  --color-error: #e75c4c;
  --color-form: #a0b3b0;
  --color-form-bg: #24333c;
  --color-text: #fff;
  --color-body: #c1bdba;
}
```

### Form fields

You can add your own form fields to validate. After HTML adding remember to add an ID and validation properties to constructor in **form_validators.js**.

```JS
class FormValidator {
    constructor() {
        this.formFields = [];

        this.form = document.getElementById('form');
        this.addFormField('#username', {
            minlength: 4, maxlength: 20
        });
        this.addFormField('#email', {
            minlength: 5, maxlength: 100
        });
        this.addFormField('#password', {
            minlength: 8, maxlength: 100
        });
        this.addFormField('#password2', {
            minlength: 8, maxlength: 100, matchWithPasswordId: '#password'
        });

        this.init();
    }
```
