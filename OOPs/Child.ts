import { Parent } from "./Parent.js";
class Child extends Parent{
    public constructor(){
        super();
    }
    public override greet():void{
        console.log("Hello from Child");
    }

   
}
const c=new Child();
c.greet();
