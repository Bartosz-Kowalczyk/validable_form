class FormField {
    constructor(formFieldSelector, {minlength = 3, maxlength = 100, errorMsgSelector, matchWithPasswordId}) {
        this.FormField = document.querySelector(formFieldSelector);
        this.type = this.FormField.type;
        this.minlength = minlength;
        this.maxlength = maxlength;
        this.errorMsgEl = document.querySelector(errorMsgSelector);
        this.matchWithPasswordId = matchWithPasswordId;
    }
}