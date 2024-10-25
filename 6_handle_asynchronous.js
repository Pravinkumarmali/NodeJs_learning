// Handle Asynchronous Data in Node.js

// let a = 10;
// let b = 0;
// setTimeout(() => {
//   b = 20;
// }, 2000);

// console.log(a + b);
// output:10

// -------------------------------------
// solve this problem by promise
// -------------------------------------

let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve((b = 20));  // also right
    resolve(20);
  }, 2000);
});

waitingData.then((e) => {
  console.log(a + e);
});
// output:30

// fatch() function jo hota hai ussme pahle se hi promise likha huaa hota hai ussme sirf hame ".then" laga kar use karna hai.
// custome function bana rahe hai tab hame promise define karna hota hai.
