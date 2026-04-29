document.addEventListener("DOMContentLoaded", init);
import {inputController} from './input-controller.js';

function init() {
    window.onload = () => {
        console.log('Все компоненты загружены!');
    };

    if (this.host) {
        console.log('localhost = true');
    };


    const input = document.getElementById("input1");
    const controller = new inputController();

    document.addEventListener("keydown", (action) => {
        controller.bindAction(action);
    });
    document.addEventListener("keyup", (action) => {
        controller.bindAction(action)
    });
}

