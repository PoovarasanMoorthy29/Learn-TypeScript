function add(num1:number, num2:number):number{
    return num1+num2;
}
function substract(num1:number, num2:number):number{
    return Math.abs(num1-num2);
}
function multiply(num1:number, num2:number):number{
    return num1*num2;
}
function divide(num1:number, num2:number):number{
    return num1/num2;
}

console.log(add(10,10));
console.log(substract(10,5));
console.log(multiply(5,5));
console.log(divide(10,2));