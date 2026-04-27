export class inputController {
    constructor(ACTION_LEFT, ACTION_RIGHT, ACTION_UP, ACTION_DOWN) {
        this.ACTION_LEFT = ACTION_LEFT;
        this.ACTION_RIGHT = ACTION_RIGHT;
        this.ACTION_UP = ACTION_UP;
        this.ACTION_DOWN = ACTION_DOWN;

        this.ACTION_ACTIVATED = false;
    }

    bindAction(actionsToBind) {
        if (actionsToBind.keyCode === 37 || actionsToBind.keyCode === 65) {
            this.ACTION_LEFT = actionsToBind.keyCode;
            this.enableAction(actionsToBind);
        } else if (actionsToBind.keyCode === 39 || actionsToBind.keyCode === 68) {
            this.ACTION_RIGHT = actionsToBind.keyCode;
            this.enableAction(actionsToBind);
        } else if (actionsToBind.keyCode === 38 || actionsToBind.keyCode === 87) {
            this.ACTION_UP = actionsToBind.keyCode;
            this.enableAction(actionsToBind);
        } else if (actionsToBind.keyCode === 40 || actionsToBind.keyCode === 83) {
            this.ACTION_DOWN = actionsToBind.keyCode;
            this.enableAction(actionsToBind);
        }
       
    }

    enableAction(actionName) {
        const input = document.getElementById("input1");

        input.addEventListener("focusin", (event) => {
            event.target.style.background = "black"
        });

        console.log(actionName.code);
    }

    disableAction(actionName) {
        const input = document.getElementById("input1");

        input.addEventListener("focusout", (event) => {
            event.target.style.background = "white"
        });

        console.log(actionName.code);
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
            this.ACTION_ACTIVATED = true;
            console.log("Button activated: " + this.ACTION_ACTIVATED);
            this.enableAction(keyCode);
        });
        document.addEventListener("keyup", (keyCode) => {
            this.ACTION_ACTIVATED = false;
            console.log("Button diactivated: " + this.ACTION_ACTIVATED);
            this.disableAction(keyCode);
        })
        return Boolean;
    }


}