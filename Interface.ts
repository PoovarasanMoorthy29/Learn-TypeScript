interface User {
  name: string;
  age: number;
}
const user1: User = {
  name: "John",
  age: 22,
};

type Data = {
  userId: number;
};
const user2: Data = { userId: 12345 };

console.log(user1);



interface Greet {
    message:string
}

interface Wish extends Greet{
    message:string,
    Wishing:string
};

const wishes :Wish={
    message:"Hi john",
    Wishing:"Happy birthday!!"
};
console.log(wishes);