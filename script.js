'use strict';
// function calCage(birthyear) {
//   const age = 2037 - birthyear;

//   function printAges() {
//     let contxt = `${firstName} is ${age} , born in ${birthyear} `;
//     console.log(contxt);
//     if (birthyear >= 1981 && birthyear <= 1996) {
//       const firstName = 'Alan';
//       const str = `seems you are a mallenial , ${firstName}`;
//       console.log(str);
//       contxt = 'new output';
//     }
//     console.log(contxt);
//   }
//   printAges();
//   return age;
// }
// // calCage(2003);
// const firstName = 'Muhammad';
// calCage(1992);

// // const age = 12;
// // console.log(age);
// if (calCage === true) console.log('this is javascript');

// // console.log(age);

//Hoisting with variables
// console.log(true);
// // console.log(me);
// // console.log(age);
// let age = 13;
// const me = 'this';
// var agaim = true;

// // Hoisting with Functions************>
// console.log(ages(2, 3));
// // console.log(dasr(4, 5));
// // console.log(addArrow(3, 8));
// // decloration
// function ages(a, b) {
//   return a + b;
// }
// // expression
// const expre = function (a, b) {
//   return a + b;
// };
// //Array
// const addArrow = (a, b) => a + b;
// console.log(this);
// const calAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   // console.log(this);
// };
// calAge(1991);

// const arrowAge = birthYear => {
//   console.log(2024 - birthYear);
//   // console.log(this);
// };

// arrowAge(2003);

// const alan = {
//   year: 2003,
//   occupation: 'programmer',
//   calcAge: function () {
//     // console.log(this);
//   },
// };
// alan.calcAge();

// let anna = {
//   year: 2003,
// };

// anna.calcAge = alan.calcAge;
// anna.calcAge();
// const firstName = 'muhammad';
const java = {
  firstName: 'Alan2',
  alan: {
    firstName: 'Alan',
    job: 'waiter',
    salary: 3000,

    sad: () => {
      console.log(`hey ${this.firstName}`);
    },
  },
};
java.alan.sad();
// alan.sad();

console.log(this);
