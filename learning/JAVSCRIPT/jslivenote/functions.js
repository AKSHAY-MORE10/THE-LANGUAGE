// let arr=[1,2,3,4,5,6,7,8];
// arr.forEach(function(elem) {
//     arr%2==0
//     console.log(elem)
// });


// function isEven(n){
//     return n%2==0
// }
// console.log(isEven(4))
// console.log(isEven(1))


// !real copy of array and objects   , spread opreator

// let arr = [1,23,4,5 ];
//let arr2 = [...arr];

//console.log(arr2);
//console.log(arr);




// let arr  = {
//     name:"hitesh",
//     age:32 ,
// }

// let arr2  ={...arr}
//arr2.name = "hitesh kumar"
//arr2.push(1)
// console.log(arr2)
// console.log(arr)



// //!  destructureing of  array and object

////! for arrry
// let a = ["nitesh" , "akshay" , "siddhant"];

// let [n , , s] = a ;
// console.log(a)


// let b = ["nit","akshh","sidd"]
// let [a , d, c] = b;
// console.log(d);

////! for object
// let obj = {
//     name:"nitesh",
//     rollono:12,
// }
// let {name , rollono} = obj ;
// console.log(obj)



// ! foreach and for in

// ! argument
// ! parameter


// //! demo  for understanding how tha parameter and  argument is
// function add(a ,b, ...c ){
// console.log(a + b )
// console.log(c);
// }
//     add(2 ,3 , 2,34,5,5)



// //!  foreach
// let arr23 = [1,2,3,4,5,6,7,8,9] ;
// arr23.forEach(function (elem){
//     console.log(elem + 1)
    
// });


// let obj ={
//     "name":"nitesh",
//     1:18,
//     rollo:12 ,
// }

// console.log(obj["1"])
// console.log(obj.name)

// arr[4]

//
// for(let key in obj ){
// console.log(key)
// console.log(obj[key])
// }


// ! function likhne ka 3 tarike

// 4. arrow function

// //* 1. function decelration

// function name(){
    
//     console.log("name")
// }
// name()

// //* 2. function expression  / anonymous function

// let a = function(){
//     console.log(a)
// }

// a()

 


// ! differnt types of functions

// first class function


// function inner(a){

//     a()
// }
// inner(function(){
//     console.log("Hello")
//     inner(function(){
//         console.log("hello2")
//     })
// })


// higher order function
// yesa function jo parameter  me function accept karta rahega ya function ko return karta rahega to usse higher fucnt kehte he

// //! callback fucntion -- theory
// let i = 0


// //!  setInterval , setTimeout
// let inter = setInterval(function () {
//     console.log(i++)
//     if (i == 5) {
//         clearInterval(inter)
//     }
// } ,2000)

//  let timer = setTimeout(function() {
//     console.log("hello")
// }, 400);

// clearTimeout(timer)

    

//  for in  , for each , for loop , do while  ,while


// //!  for of - ke yander ayta hai direct vales of the array elements , only apply on array
// //!  for in - ke yander ayta hai direct keys of the array elements

// let fruits = ["apple", "orange", "mango", "grapes"];




// for ( let fruit of fruits) {
//     console.log(fruit)
// }

// for ( let key in fruits) {
//     console.log(key)
// }

 //  !for each

// fruits.forEach(function (fruit ,idx  ,arrayfruit) {
//      console.log(fruit)
//      console.log(idx)
//      console.log(arrayfruit)


//  })


// object banane ke tarike

// !1.  objecct literal
// let name = {
//       nam:"hello"
// }
 
//  ! 2.
// let obj = Object.create(null);
// obj.name = "hello"
// console.log(obj)





// new  keyword
// let a = new Object();;
// console.log(a)

// this
// ! this ka value node me {} , browser me hai window object
//  ! this ka value global function in node me global object
// ! this ka vlaue in browser me window object

//  ! method ye yander agar this ka value check kiyato kud ke object ka hii  print

//  ! this ka value event listner ke yander kud ka refernce hota hai


// console.log(this)

// function helo() {
    // console.log(this) // !  global object
// }
// helo()

// method aur function
// let obj = {
//     name: "hitesh",
//     rolo: 23,
//     printusername: function () {
//         console.log(this.name)
//     }
// }
// console.log(obj.printusername())
// obj.printusername()






//! Return keyword 

function us() {
    
    // console.log("hello")
}

// function us2() {
//      let a = "bro hello"
//     return a; 
// }


// let f = 45;
// let g = 34;
// let k = 23;
// let sav = us() 
//  console.log(sav)
// let save = us2();
// console.log(save)



//  this  keyword -- 50%
//  new keyword  50%
// return keyword  90 %
//!  consturctor function

//  ! yaise koi vhi function jisko call karte wakt hum prefix me new keyword dete hai aur  ,vo function ke yander this ka use huya ho vo function ko constuctor funciton kathte hai

// function createUser(username , email , password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;

// }

let res = new createUser("nitesh", "emailmai@gmail.com", "psso")
 
let res2 =  new  createUser("rakesh" , "emailmai" , "psso")


console.log(res)
console.log(res2)


//!This is Generated one
// class BankAccount {
//     constructor(accountHolderName) {
//       this.accountHolderName = accountHolderName;
//       this.accountBalance = 0;
//     }
  
//     deposit(amount) {
//       if (amount > 0) {
//         this.accountBalance += amount;
//         console.log(`Deposited ${amount}. New balance: ${this.accountBalance}`);
//       } else {
//         console.log("Invalid deposit amount. Please enter a positive value.");
//       }
//     }
  
//     withdraw(amount) {
//       if (amount > 0 && amount <= this.accountBalance) {
//         this.accountBalance -= amount;
//         console.log(`Withdrew ${amount}. New balance: ${this.accountBalance}`);
//       } else if (amount > this.accountBalance) {
//         console.log("Insufficient funds.");
//       } else {
//         console.log("Invalid withdrawal amount. Please enter a positive value.");
//       }
//     }
  

//     getBalance() {
//       console.log(`Current balance: ${this.accountBalance}`);
//     }
//   }
  
  // Create an instance of the BankAccount class
  // const myAccount = new BankAccount("John Doe");


//! This is practiced one
  class BankAccount {

    static totalUser  =0;
    
   #accountBalance;

 #incrementByone  = ()=>{
   this.#accountBalance += 1;
   console.log("you can increase by one ")
 };

 
   constructor(accountHolderName) {
     this.accountHolderName = accountHolderName;
     this.#accountBalance = 0;
BankAccount.totalUser++ ;
   }
   
 
   deposit(amount) {
     if (amount > 0) {
       this.#accountBalance += amount;
       console.log(`Deposited $${amount}. New balance: $${this.#accountBalance}`);
     } else {
       console.log("Invalid deposit amount.");
     }
   }
 
   withdraw(amount) {
     if (amount > 0 && amount <= this.#accountBalance) {
       this.#accountBalance -= amount;
       console.log(`Withdrew $${amount}. New balance: $${this.#accountBalance}`);
     } else if (amount > this.#accountBalance) {
       console.log("Insufficient funds.");
     } else {
       console.log("Invalid withdrawal amount.");
       this.#incrementByone();
     }
   }
 
   getBalance() {
     return this.#accountBalance;
   }
 }

 const user1 = new BankAccount("Akshay");
 const user2 = new BankAccount("Akshay");
 const user3 = new BankAccount("Akshay");

//   console.log(BankAccount.totalUser);


//   console.log()
// user1.deposit(100)
// console.log(user1.getBalance());
// user1.withdraw(-100)

console.log(user1.getBalance());
//   user1.deposit(100)
//   user1.withdraw(200)

//   console.log(user1.getBalance());

//   BankAccount.prototype.incrementByOne = function(){   
// //   this.#accountBalance += 1;
// console.log("you can increase by one ")

//   } 


// static variable and method

// private variable and method


  
  // Perform some deposits and withdrawals
  // myAccount.deposit(1000);
  // myAccount.withdraw(500);
  // myAccount.deposit(200);
  // myAccount.withdraw(100);
  
  // // Log the final balance
  // myAccount.getBalance();









// ! arrow function  , all 3 type
// let a = c => c + 2;

// !1 . {} ==> return likha padega agar kuch retrun karna hai (explictly )to
// ! 2. () ==> no need to return , it will return implictly .
// console.log(a(2,3))

// let result = a(2, 3);
// console.log((result))

 
// rest oprator [...] / spread operator

// let a = [1, 2, 3, 4]
// let cpy = [...a];

// function add(a, b ,...c ) {
//     console.log(a + b)
//     console.log(c)
// }

// add(2,3 ,4,5,6,4,6,4,4)




//  map . filter , reduce 
// null vs undefined


// promises , async await 

//  stack memory is used in primitives types .
// real copy of  data // deep copies of data



//  heap memory is used in reference types .
// will get reference  of  data .  // shallow copy of data 

// DOM ---

