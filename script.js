'use strict';
// //  function calCage(birthYear){
// //  const age = 2037 - birthYear;

// //  function printAge(){
// //  let output = `${firstName},you are ${age},born in ${birthYear}`;
// //  console.log(output);

// //  if(birthYear >= 1981 && birthYear <= 1996){
// //      var Millenial = true;
// //      const firstName = 'steven';

// //      // Reasssigning outer scope's variable
// //      output = 'NEW OUTPUT!';
     
// //     const str = ` oh you are a millenial, ${firstName}`
// //     console.log(str);

// //     function add(a,b){
// //        return a + b;
// //  }

// //  }
// // console.log(Millenial);
// // console.log(output);
// //  }
// //  printAge()
// //  return age;
// //  }

// //  const firstName = 'Mukhammadaziz';
// //  calCage(1991);

// // variables
// console.log(me);
// // console.log(teacher);
// // console.log(year);

// var me ='Mukhammadaziz'
// let job ='teacher';
// const year = 1991;


// // function decloration
// console.log(addDecl(2,5));
// // console.log(addExp(2,7));
// // console.log(addArrow(2,5));


// function addDecl (a,b){
//     return a+b;
// }

// const addExp = function(a,b){
// return a + b;
// }

// const addArrow = (a,b) => a+b;
// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart(){
//     console.log('All produts have been deleted');  
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// // function lcAge(birthYear) {
// //   const age = 2037 - birthYear;

// //   function printAge() {
// //     let output = `${firstName} is ${age},and you were born in ${birthYear}`;
// //     console.log(output);

// //     if (birthYear >= 1991 && birthYear <= 1996) {
// //       var Millenial = true;

// //       // Creating NEW variable with same name as
// //       // outer scope's variable
// //       const firstName = 'Aziz';

// //       // Reasssigning outer scope's variable
// //       const str = `Oh,and you're a Millenial,${firstName}`;
// //       console.log(str);
// //       function add(a, b) {
// //         return a + b;
// //       }
// //       output = 'NEW OUTPUT!';
// //     }
// //     console.log(output);
// //     console.log(Millenial);
// //     // console.log(add(2, 4));
// //   }
// //   printAge();
// //   return age;
// // }
// // const firstName = 'Muhammadaziz';
// // calcAge(1991);





// // var me = 'jonas';
// // let job = 'teacher';

// // const year = 1991;

// // //functions

// // console.log(addDecl(3,5));
// // // console.log(addExp(3,5));
// // console.log(addArrow(3,5));


// // function addDecl (a,b){
// //     return a + b;
// // }
// // var addExp = function (a , b) {
// //     return a + b;   
// // }
// // var addArrow = (a,b) => (a + b);

// // examples
// console.log(numbroducts);

// if(!numbroducts)deleteAll()
// var numbroducts = 0;
// function deleteAll (){
//     console.log('everthing is deleted!');  
// }

  console.log(this);  
  const calCage = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
  }
  calCage(1991);

//   Arrow
  const calArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
  };
  calCage(1991);

  const jonas ={
  year: 1991,
  job:'interprenour',
  calCage: function(){
    // console.log(this); 
    
    console.log(2037 - this.year);
}
  }
  jonas.calCage();


  const matilda = {
    year : 2017,
  }

  matilda.calCage = jonas.calCage;
  matilda.calCage();

  const f = jonas.calCage;
  f()