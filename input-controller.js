export class inputController {


static ACTION_ACTIVATED = "input-controller:action-activated";
static ACTION_DEACTIVATED = "input-controller:action-deactivated";

    constructor() {
        this.ACTION;
        this.ACTION_LISTENER = false;
        this.ACTION_ACTIVE = false;
    }

    bindAction(actionsToBind) {
        try {
            if (actionsToBind.keyCode === 37 || actionsToBind.keyCode === 65) {
                this.isKeyPressed(actionsToBind);
                this.isActionActive(actionsToBind);

                this.attach(actionsToBind);
            } else if (actionsToBind.keyCode === 39 || actionsToBind.keyCode === 68) {
                this.isKeyPressed(actionsToBind);
                this.isActionActive(actionsToBind);

                this.attach(actionsToBind);
            } else if (actionsToBind.keyCode === 38 || actionsToBind.keyCode === 87) {
                this.isKeyPressed(actionsToBind);
                this.isActionActive(actionsToBind);

                this.attach(actionsToBind);
            } else if (actionsToBind.keyCode === 40 || actionsToBind.keyCode === 83) {
                this.isKeyPressed(actionsToBind);
                this.isActionActive(actionsToBind);

                this.attach(actionsToBind);
            }
        } catch {

        }
        
    }

    enableAction(actionName) {
        const activate = document.getElementById("activate_place");
        const input = document.getElementById("input1");

        const actionAccets = this.ACTION_ACTIVE;

        if (actionAccets) {
            input.addEventListener("focusin", (event) => {
                event.target.style.background = "black"
            });

            console.log(actionName.code);
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

        const actionAccets = this.ACTION_ACTIVE;

        if (!actionAccets) {
            console.log(actionName.code);
            input.placeholder = actionName.code;
            activate.placeholder = "Activ button: off"
        }
        
    }

    attach(target) {
        const buttonAdd = document.getElementById("btnAdd");
        const input = document.getElementById("input1");
        const eventActivate = new Event(inputController.ACTION_ACTIVATED);
        const eventDeactivate = new Event(inputController.ACTION_DEACTIVATED);

        if (this.ACTION_ACTIVE) {
            target.target.dispatchEvent(eventActivate, {bubbles: true});
        } else {
            target.target.dispatchEvent(eventDeactivate, {bubbles: true});
        }

        target.target.addEventListener("input-controller:action-activated", (action) => {
            this.ACTION_LISTENER = true;
            console.log("Button activated: " + this.ACTION_LISTENER);

            this.ACTION = action;
            this.enableAction(target);
        });

        target.target.addEventListener("input-controller:action-deactivated", (action) => {
            this.ACTION_LISTENER = false;
            console.log("Button diactivated: " + this.ACTION_LISTENER);

            this.ACTION = action;
            this.disableAction(action);
            this.detach();
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
        return action.type === "keydown" ? this.ACTION_ACTIVE = true : this.ACTION_ACTIVE = false;
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