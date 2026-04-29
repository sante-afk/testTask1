document.addEventListener("DOMContentLoaded", init);

function init() {
    window.onload = () => {
        console.log('Все компоненты загружены!');
    };

    if (this.host) {
        console.log('localhost = true');
    }

}

