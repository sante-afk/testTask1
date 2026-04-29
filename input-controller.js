export class inputController {

static ACTION_ACTIVATED = "input-controller:action-activated";
static ACTION_DEACTIVATED = "input-controller:action-deactivated";

    constructor() {
        this.ACTION;
        this.ACTION_LISTENER = false;
        this.ACTION_ACTIVE = false;
    }

    bindAction(actionsToBind) {
        this.ACTION = actionsToBind;
        this.enableAction(actionsToBind.type);
    }

    enableAction(actionName) {
        const input = document.getElementById("input1");
        const activate = document.getElementById("activate_place");
        const actionActive = this.isActionActive(actionName);

        if (actionActive) {
            input.placeholder = actionName;
            const eventActivate = new Event(inputController.ACTION_ACTIVATED);
            this.ACTION.target.dispatchEvent(eventActivate, {bubbles: true});
            this.attach(this.ACTION);
        } else {
            this.disableAction(actionName);
        }
    }

    disableAction(actionName) {
        const actionActive = this.isActionActive(actionName);
       
        if (!actionActive) {
            const eventDeactivate = new Event(inputController.ACTION_DEACTIVATED);
            this.ACTION.target.dispatchEvent(eventDeactivate, {bubbles: true});
            this.detach();
        }     
    }

    attach(target) {
        const buttonAdd = document.getElementById("btnAdd");
        const input = document.getElementById("input1");
        
        target.target.addEventListener("input-controller:action-activated", (action) => {
            this.isKeyPressed(target);
            console.log("Button activated: " + this.ACTION.keyCode);
        });

    }

    detach() {
        const target = this.ACTION;

        target.target.addEventListener("input-controller:action-deactivated", (action) => {
            this.isKeyPressed(target);
            console.log("Button diactivated: " + this.ACTION.keyCode);
        });

    }

    isActionActive(action) {
        return action === "keydown" ? this.ACTION_ACTIVE = true : this.ACTION_ACTIVE = false;
    }

    isKeyPressed(keyCode) {
        try {
            if (keyCode.type === "keydown") {
                this.ACTION_LISTENER = true;
                console.log("Button pressed");
                return true;
            } 
            if (keyCode.type === "keyup") {
                this.ACTION_LISTENER = false;
                console.log("Button unpressed");
                return false;
            }
        } catch {
        }
        return false;
    }


}