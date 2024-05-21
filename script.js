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
// let firstName = 'muhammad';
// const vasa = {
//   firstName: 'jahongir',
//   sad3() {
//     console.log(this.firstName);
//     firstName = 'abdurahmon';
//   },
//   java: {
//     firstName: 'Alan2',
//     alan: {
//       sad2() {
//         console.log(this.firstName);
//         console.log('i worked as');
//         this.ishlagan.forEach(ish => {
//           console.log(ish);
//           firstName = 'alan';
//         });
//       },
//       ishlagan: ['afitsant', 'programisz'],
//       firstName: 'Alan',
//       job: 'waiter',
//       salary: 3000,

//       sad1: function () {
//         console.log(`hey ${this.firstName}`);
//       },
//       firstName: 'Alan',
//     },
//   },
// };
// // vasa.java.alan.sad2();
// vasa.java.alan.sad2();
// vasa.sad3();
// vasa.java.alan.sad1();
// // alan.sad();
// const sbaz = {
//   name: 'alan',
//   java: this.name,
//   fun: function () {
//     console.log(this.java);
//   },
// };
// sbaz.fun();
// // console.log(this);
// const obj = {
//   // This will result in a syntax error
//   myMethod: function myMethod() {
//     console.log('This is a function declaration inside an object');
//   },
// };
// const exclaim = string => string + '!!!';
// const listen = string => 'Listen up! ' + string;
// const uppercase = string => string.toUpperCase();
// obj.myMethod();
// const text = 'Hello World';

// console.log(uppercase(exclaim(listen(text))));
// this.alert('hello');
// var java = 'easy';
// let sabzi = {
//   fanc1: function () {
//     console.log(this);
//     let java = 'complex';
//     const fanc2 = function () {
//       const fanc3 = function () {
//         let java = 'alan';
//         console.log(this.java);
//       };
//       // fanc3();
//     };
//     // fanc2();
//   },
// };
// sabzi.fanc1();
// // fanc1();
// // fanc1.fanc2.fanc3();

// // let a = null;
// // console.log(typeof a);

// // \"this " in objects show the object head which is  B here and "this" keyword is used to select the user inside its object because if we use the user name itself and try to select keys inside init it does not work
const v = {
  a: 'toy',
  c: function () {
    console.log(this.a);
  },
};
// v.c();
const a = 'game';
const b = {
  a: 'toy',
  c: () => {
    // const innerFunc = function () {
    console.log(this.a); // this refers to the outer function's this, which is b
    // };
    // innerFunc();
  },
};
const year = 1221;
b.c(); // Logs 'toy'
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Self-reference for inner function
    // const this = this;
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};

jonas.calcAge();
const firstName = 'Alan';
const me = {
  name: firstName,
  this: function () {
    console.log(this.name);
  },
  //  this()
};
me.this();

let last;
