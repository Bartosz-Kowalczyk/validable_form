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

        console.log(this.formFields);

        this.init();
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