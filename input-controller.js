export class inputController {
    constructor(ACTION_LEFT, ACTION_RIGHT, ACTION_UP, ACTION_DOWN) {
        this.ACTION_LEFT = ACTION_LEFT;
        this.ACTION_RIGHT = ACTION_RIGHT;
        this.ACTION_UP = ACTION_UP;
        this.ACTION_DOWN = ACTION_DOWN;

        this.ACTION_ACTIVATED = false;
        this.ACTION_LISTENER = false;
    }

    bindAction(actionsToBind) {
        if (actionsToBind.keyCode === 37 || actionsToBind.keyCode === 65) {
            this.ACTION_LEFT = actionsToBind.keyCode;
        } else if (actionsToBind.keyCode === 39 || actionsToBind.keyCode === 68) {
            this.ACTION_RIGHT = actionsToBind.keyCode;
        } else if (actionsToBind.keyCode === 38 || actionsToBind.keyCode === 87) {
            this.ACTION_UP = actionsToBind.keyCode;
        } else if (actionsToBind.keyCode === 40 || actionsToBind.keyCode === 83) {
            this.ACTION_DOWN = actionsToBind.keyCode;
        }
       
    }

    enableAction(actionName) {
        const activate = document.getElementById("activate_place");
        const input = document.getElementById("input1");

        input.addEventListener("focusin", (event) => {
            event.target.style.background = "black"
        });

        console.log(actionName.code);
        if (!actionName.code) {
            input.placeholder = "press < ^ > and (wasd) ";
            activate.placeholder = "Activ button: off"
        } else {
            this.bindAction(actionName);
            input.placeholder = actionName.code;
            activate.placeholder = "Activ button: on"
        }
    }

    disableAction(actionName) {
        const input = document.getElementById("input1");
        const activate = document.getElementById("activate_place");

        input.addEventListener("focusout", (event) => {
            event.target.style.background = "white"
        });

        console.log(actionName.code);
        input.placeholder = actionName.code;
        activate.placeholder = "Activ button: off"
    }

    attach(target) {
        const buttonAdd = document.getElementById("btnAdd");
        const input = document.getElementById("input1");

        buttonAdd.addEventListener("click", (event) => {
            this.ACTION_LISTENER = true;
            this.isKeyPressed(input);
            this.enableAction(event);
        });
    }

    detach() {
        const buttonRemove = document.getElementById("btnRemove");
        const input = document.getElementById("input1");
        const activate = document.getElementById("activate_place");

        buttonRemove.addEventListener("click", (event) => {
            this.ACTION_LISTENER = false;
            document.removeEventListener("keydown", this.isKeyPressed(input));
            document.removeEventListener("keyup", this.isKeyPressed(input));

            input.placeholder = "";
            activate.placeholder = "";
        });

    }

    isActionActive(action) {
        return Boolean;
    }

    isKeyPressed(keyCode) {
        try {
            if (keyCode) {
                document.addEventListener("keydown", (keyCode) => {
                    this.ACTION_ACTIVATED = true;
                    console.log("Button activated: " + this.ACTION_ACTIVATED);
                    this.enableAction(keyCode);
                });
                document.addEventListener("keyup", (keyCode) => {
                    this.ACTION_ACTIVATED = false;
                    console.log("Button diactivated: " + this.ACTION_ACTIVATED);
                    this.disableAction(keyCode);
                });
            }
        } catch {
            alert("Error: keyCode undefined");
        }
        
        return Boolean;
    }


}