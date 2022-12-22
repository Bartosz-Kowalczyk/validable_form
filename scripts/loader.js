class PageLoader {

    constructor() {
    }

    init() {
        window.addEventListener('load', this.changeVisibility);
    }

    changeVisibility() {
        document.getElementById('container').classList.add('active');
        document.getElementById('loader').classList.remove('active');
        document.getElementById('circle').classList.remove('active');
    }

}

const pageLoader = new PageLoader();
pageLoader.init();