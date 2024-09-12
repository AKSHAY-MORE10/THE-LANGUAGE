// ! for loop 

// example:
// for (initialization; condition; updation) { 
    // Code to be executed
// }

for (let i = 1; i <= 5; i++) {
  console.log("Number: " + i);
}


// for (let a = 1; a <= 10; a++) {
//   console.log("Number: " + a*2);
// }







// ! do while loop

// example:
// do {
  // Code to be executed
// } while (condition);


let i = 1;
do {
  console.log("Number: " + i);
  i++;
} while (i <= 5);  


//! while loop

// example:
// while (condition) {
  // Code to be executed
// }

let a = 1;

while (a <= 5) {
  console.log("Number: " + a);
  a++;
}


//?using Break statement

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
      break; // Exit the loop when i equals 5
  }
  console.log("Number: " + i);
}


//? continue statement

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//       continue; // Skip the current iteration when i equals 5
//   }
//   console.log("Number: " + i);
// }  
