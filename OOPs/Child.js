import { Parent } from "./Parent";
class Child extends Parent {
    constructor() {
        super();
    }
    greet() {
        console.log("Hello from Child");
    }
}
const c = new Child();
c.greet();
