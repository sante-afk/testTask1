export class inputController {
    constructor(ACTION_LEFT, ACTION_RIGHT, ACTION_UP, ACTION_DOWN) {
        this.ACTION_LEFT = ACTION_LEFT;
        this.ACTION_RIGHT = ACTION_RIGHT;
        this.ACTION_UP = ACTION_UP;
        this.ACTION_DOWN = ACTION_DOWN;
        
    }

    bindAction(actionsToBind) {
    }

    enableAction(actionName) {
        
    }

    disableAction(actionName) {

    }

    attach(target, dontEnable) {

    }

    detach() {
        
    }

    isActionActive(action) {
        return Boolean;
    }

    isKeyPressed(keyCode) {
        document.addEventListener("keydown", (keyCode) => {
            if (keyCode.code === "ArrowLeft") {
                console.log("Влево");
            }
            if (keyCode.key === "ArrowRight") {
                console.log("Вправо");
            }
            if (keyCode.key === "ArrowUp") {
                console.log("Вверх");
            }
            if (keyCode.key === "ArrowDown") {
                console.log("Вниз");
            }
        });
        return Boolean;
    }


}