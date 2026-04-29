export class inputController {

static ACTION_ACTIVATED = "input-controller:action-activated";
static ACTION_DEACTIVATED = "input-controller:action-deactivated";

    constructor() {
        this.ACTION;
        this.ACTION_LISTENER = false;
        this.ACTION_ACTIVE = false;
        this.ACTION_PRESSED = false;
    }

    bindAction(actionsToBind) {
        this.ACTION = actionsToBind;
        const isActiv = this.isActionActive(actionsToBind.type) ? this.enableAction(actionsToBind.type) : this.disableAction(actionsToBind.type);
    }

    enableAction(actionName) {
        const input = document.getElementById("input1");
        const activate = document.getElementById("activate_place");
        const actionActive = this.isActionActive(actionName);

        if (actionActive === "keydown") {
            input.placeholder = actionName;
            const eventActivate = new Event(inputController.ACTION_ACTIVATED);
            this.ACTION.target.dispatchEvent(eventActivate, {bubbles: true});
            this.attach(this.ACTION);

            this.ACTION.target.addEventListener("input-controller:action-activated", (action) => {
                console.log("Button pressed: " + this.ACTION_PRESSED);
                this.isKeyPressed(this.ACTION.keyCode);
                console.log("Button activated: " + this.ACTION.keyCode);
            });
        } 
    }

    disableAction(actionName) {
        const actionActive = this.isActionActive(actionName);
       
        if (!actionActive) {
            const eventDeactivate = new Event(inputController.ACTION_DEACTIVATED);
            this.ACTION.target.dispatchEvent(eventDeactivate, {bubbles: true});
            this.detach();

            this.ACTION.target.addEventListener("input-controller:action-deactivated", (action) => {
                this.isKeyPressed(this.ACTION.keyCode);
                console.log("Button pressed: " + this.ACTION_PRESSED);
                console.log("Button diactivated: " + this.ACTION.keyCode);
            });
        }     
    }

    attach(target) {
        document.addEventListener("keydown", (action) => {
            this.bindAction(action);
        });
        document.addEventListener("keyup", (action) => {
            this.bindAction(action)
        });
    }

    detach() {
        document.removeEventListener("keydown", (action) => {});
        document.removeEventListener("keyup", (action) => {});
    }

    isActionActive(action) {
        return action === "keydown" ? this.ACTION_ACTIVE = true : this.ACTION_ACTIVE = false;
    }

    isKeyPressed(keyCode) {
        return this.ACTION_PRESSED = this.ACTION_PRESSED != true;
    }


}