// ****
// ***
// **
//*

// let n = 4
// for (let i = 0; i<n; i++){
//     for (let j = 0; j < n-i; j++){
//         console.log("x")
//     }
//     console.log("\n");
    
// }

// let n = 10;
// let fact = 1;
//  for (let i = 1; i <= n; i++){
//     fact *= i;
//  }
// console.log(fact);


function sum(a,b){
   console.log(this)
   console.log(a + b);
}
sum(1,3);