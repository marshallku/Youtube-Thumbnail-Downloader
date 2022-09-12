import bindMethods from "../utils/bindMethods";

export default class IdStore extends EventTarget {
    id: string;

    constructor() {
        super();

        this.id = "";
        bindMethods(this);
    }

    #update() {
        this.dispatchEvent(new CustomEvent("update"));
    }

    setId(id: string) {
        this.id = id;
        this.#update();
    }
}
