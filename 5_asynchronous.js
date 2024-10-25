// <----- Asynchronous ------>
/*
// Ex.1

// Task:1
console.log("start exe.....");

// Task:2
setTimeout(() => {
  console.log("logic exe.....");
}, 2000);

// Task:3
console.log("complete exe.....");

*/

// Ex.2

let a = 10;
let b = 0;
setTimeout(() => {
  b = 20;
}, 2000);

console.log(a + b);

// Note: This is dropback of asynchronous programming Isse Callback ya fir promises se handle karna hoga.
// "callback" purana tarika hai abhi log "promise" ya fir "async await" use karte hai.
