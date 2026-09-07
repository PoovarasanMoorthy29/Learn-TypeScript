//Any
// It don't perform type checking

let value:any='10';
console.log(value);


// unknown 
// unknown is the safer alternative to any.
// unknown type check before use
let val : unknown=1009238;
console.log(val);


// Object
let user :object={
    names: 'Poovarasan',
    age : 21
}
console.log(user);