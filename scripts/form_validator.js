class FormValidator {
    constructor() {
        this.formFiels = [];

        this.form = document.getElementById('form');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.validateForm();
        });
    }

    validateForm = () => {
        const formResults = this.formFiels.map( field => field.validate() );

        if (formResults.includes(false)) {
            console.log('Formular error')
        } else {
            console.log('Formular ok')
        }
    }
}