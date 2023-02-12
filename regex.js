// const s1 = "hoooooooooooow are you";
// const s2 = "Welcome to the class";
// const s3 = "regular Expressionn";

// const regex = /h.+w/;
// const remm = new RegExp("r.+r ");

// const result = regex.test(s1);
// const ans2 = s3.match(remm);

// console.log(result);
// console.log(ans2);

let str = "Aman 9898989898, NRrupul 987987789, Masai 1234123456";
const numbers = /[0-9]+/g;
const names = /[A-Z]+[a-z]+/g;

console.log(str.match(numbers));
console.log(str.match(names));

//regex101.com
