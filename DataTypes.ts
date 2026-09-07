// string 
var names :  string='poovarasan';
console.log(names);

// numbers 

var num: number=123;
console.log('Integer: '+num);
var num1:number =19.20;
console.log('Float: '+num1);
var num2:number =0xf00d;
console.log("Hexadecimal: "+num2);

// bigint 
const bigNumber=BigInt('123456789987654321');
console.log("Big Number: "+bigNumber);

//symbol
// unique value while the description not to be unique('hello')..
const unique=Symbol('hello');
console.log('Symbol: ',unique);
