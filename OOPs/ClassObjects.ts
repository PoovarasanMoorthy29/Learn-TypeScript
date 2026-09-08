class ClassObjects{
    name :string;
    public constructor(name:string){
        this.name=name;
    }
}
const obj=new ClassObjects("John");
console.log(obj.name);