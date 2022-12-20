class FormValidator {
    constructor() {
        this.formFields = [];

        this.form = document.getElementById("form");
        this.processForm();

        this.init();
    }

    processForm = () => {
        this.form.querySelectorAll('input').forEach( element => {
            let minlength = element.getAttribute('minlength');
            if (!minlength) minlength = undefined;

            let maxlength = element.getAttribute('maxlength');
            if (!maxlength) maxlength = undefined;

            let matchWithPasswordId = element.getAttribute('data-match-with-password-id');
            if (!matchWithPasswordId) matchWithPasswordId = undefined;

            this.addFormField(`#${element.id}`, {
                minlength: minlength, maxlength: maxlength,
                matchWithPasswordId: matchWithPasswordId
            });
        });
    }

    addFormField = (cssSelector, options) => {
        const formField = new FormField(cssSelector, options);
        this.formFields.push(formField);
    }

    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.validateForm();
        });
    }

    validateForm = () => {
        const formResults = this.formFields.map( field => field.validate() );

        if (formResults.includes(false)) {
            console.log('Formular error')
        } else {
            console.log('Formular ok')
        }
    }
}