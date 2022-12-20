# Validable form (HTML5, CSS3, vanilla JS)

## About
This is a very simple formular with JS validation (without HTML5 validation).
Labels, messages and all user data are described in polish.

Example: https://bartkowalczyk.com/formular

## Instalation

Just copy the code to your website.
It's made with HTML5, CSS3 and vanilla JS only.
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

You can add your own form fields to validate. Remember to add input properties for validate.
Currently these are 3 validable properties: minlength, maxlength and matchWithPasswordId.

```HTML
<div class="field-control">
    <label for="username">Nazwa użytkownika</label>
    <input
    type="text"
    id="username"
    placeholder="Wpisz nazwę użytkownika"

    <!-- FOR VALIDATION -->
    minlength="3"
    maxlength="30"

    />
    <span>Błąd</span>
</div>
```
### Default properties

If you won't add input properties that input will be validated by default (minlength = 3, maxlength = 100).
You can change the default properties: see 2nd line in **form_fields.js**.

```JavaScript
constructor(formFieldSelector, {minlength = 3, maxlength = 100, errorMsgSelector, matchWithPasswordId})
```
