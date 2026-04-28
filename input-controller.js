export class inputController {
    constructor() {
        this.ACTION;
        this.ACTION_ACTIVATED = "";
        this.ACTION_LISTENER = false;
    }

    bindAction(actionsToBind) {
        try {
            this.ACTION_ACTIVATED = actionsToBind.type;
            this.attach(this.ACTION_ACTIVATED);
        } catch {

        }
       
    }

    enableAction(actionName) {
        const activate = document.getElementById("activate_place");
        const input = document.getElementById("input1");

        const actionAccets = this.ACTION_LISTENER;

        if (actionAccets) {
            input.addEventListener("focusin", (event) => {
                event.target.style.background = "black"
            });

            console.log(actionName.code);
            if (!actionName.code) {
                input.placeholder = "press < ^ > and (wasd) ";
                activate.placeholder = "Activ button: off"
            } else {
                input.placeholder = actionName.code;
                activate.placeholder = "Activ button: on"
            }
        }
       
    }

    disableAction(actionName) {
        const input = document.getElementById("input1");
        const activate = document.getElementById("activate_place");

        input.addEventListener("focusout", (event) => {
            event.target.style.background = "white"
        });

        const actionAccets = this.ACTION_LISTENER;

        if (!actionAccets) {
            console.log(actionName.code);
            input.placeholder = actionName.code;
            activate.placeholder = "Activ button: off"
        }
        
    }

    attach(target) {
        const buttonAdd = document.getElementById("btnAdd");
        const input = document.getElementById("input1");
        input.dispatchEvent(target);

        document.addEventListener("keydown", (action) => {
            this.ACTION_LISTENER = true;
            console.log("Button activated: " + this.ACTION_LISTENER);

            if (action.keyCode) {
                this.ACTION = action;
                
                const actionActive = this.isActionActive(action);
                if (actionActive) {
                    this.enableAction(action);
                    this.isKeyPressed(action);
                }
                
            } 
        });

        document.addEventListener("keyup", (action) => {
            this.ACTION_LISTENER = false;
            console.log("Button diactivated: " + this.ACTION_LISTENER);

            if (action.keyCode) {
                this.ACTION = action;

                const actionActive = this.isActionActive(action);
                if (!actionActive) {
                    this.disableAction(action);
                    this.isKeyPressed(action);
                }
                
            }
        });

        buttonAdd.addEventListener("click", (event) => {
            this.ACTION_LISTENER = true;
            this.enableAction(input);
        });

    }

    detach() {
        const buttonRemove = document.getElementById("btnRemove");
        const input = document.getElementById("input1");
        const activate = document.getElementById("activate_place");

        buttonRemove.addEventListener("click", (event) => {
            this.ACTION_LISTENER = false;
            document.removeEventListener("keydown", this.disableAction(input));
            document.removeEventListener("keyup", this.disableAction(input));

            input.placeholder = "";
            activate.placeholder = "";
        });

    }

    isActionActive(action) {
        return action.type === "keydown" ? this.ACTION_LISTENER = true : this.ACTION_LISTENER = false;
    }

    isKeyPressed(keyCode) {
        try {
            if (keyCode.type === "keydown") {
                this.ACTION_LISTENER = true;
                return true;
            } 
            if (keyCode.type === "keyup") {
                this.ACTION_LISTENER = false;
                return false;
            }
        } catch {
        }
        return false;
    }


}