// let arr=[1,2,3,4,5,6,7,8];
arr.forEach(function (elem) {
  // console.log(elem);
});

// function isEven(n){
function isEven(n) {
  return n % 2 == 0;
}
// console.log(isEven(4));
// console.log(isEven(1));

// !real copy of array and objects , spread operator
let arr1 = [1, 23, 4, 5];
let arr2 = [...arr1];
// console.log(arr2);
// console.log(arr1);

let obj1 = {
  name: "hitesh",
  age: 32,
};
let obj2 = { ...obj1 };
obj2.name = "hitesh kumar";
// console.log(obj2);
// console.log(obj1);

// //!  destructureing of array and object
////! for array
let names = ["nitesh", "akshay", "siddhant"];
let [n, , s] = names;
// console.log(n, s);

let b = ["nit", "akshh", "sidd"];
// let [a, d, c] = b;
// console.log(d);

////! for object
let obj = {
  name: "nitesh",
  rollono: 12,
};
let { name, rollono } = obj;
// console.log(name, rollono);

// ! foreach and for in
let arr23 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr23.forEach(function (elem) {
  // console.log(elem + 1);
});

// let obj ={
let obj3 = {
  name: "nitesh",
  rollo: 12,
};
for (let key in obj3) {
  // console.log(key, obj3[key]);
}

// ! function likhne ka 3 tarike
// //* 1. function declaration
function nameFunc() {
  // console.log("name");
}
nameFunc();

// //* 2. function expression / anonymous function
let anonFunc = function () {
  // console.log("anonymous function");
};
anonFunc();

// ! differnt types of functions
// first class function
function inner(a) {
  a();
}
inner(function () {
  // console.log("Hello");
  inner(function () {
      // console.log("hello2");
  });
});

// higher order function
// //! callback function -- theory

// //! setInterval , setTimeout
let i = 0;
let inter = setInterval(function () {
  // console.log(i++);
  if (i == 5) {
      clearInterval(inter);
  }
}, 2000);

let timer = setTimeout(function () {
  // console.log("hello");
}, 400);
clearTimeout(timer);

//  for in , for each , for loop , do while , while

// //! for of - ke andar ayta hai direct values of the array elements
// //! for in - ke andar ayta hai direct keys of the array elements
let fruits = ["apple", "orange", "mango", "grapes"];

for (let fruit of fruits) {
  // console.log(fruit);
}

for (let key in fruits) {
  // console.log(key);
}

//  !for each
fruits.forEach(function (fruit, idx, array) {
  // console.log(fruit);
  // console.log(idx);
  // console.log(array);
});

// object banane ke tarike
// !1. object literal
let objLiteral = { nam: "hello" };

//  ! 2.
let objCreate = Object.create(null);
objCreate.name = "hello";
// console.log(objCreate);

// new keyword
// let a = new Object();
let a = new Object();
// console.log(a);

// this
// ! this ka value node me {} , browser me hai window object
//  ! this ka value global function in node me global object
// ! this ka value in browser me window object
// console.log(this);

//  ! method ye yander agar this ka value check kiya to khud ke object ka hi print hota hai
//  ! this ka value event listener ke yander khud ka reference hota hai

function helo() {
  // console.log(this); // !  global object
}
helo();

// method aur function
let objMethod = {
  name: "hitesh",
  rolo: 23,
  printusername: function () {
      // console.log(this.name);
  },
};
// console.log(objMethod.printusername());
objMethod.printusername();

//! Return keyword
function us() {
  // console.log("hello")
}

function us2() {
  let a = "bro hello";
  return a;
}

let sav = us();
// console.log(sav);
let save = us2();
// console.log(save);

// ! constructor function
//  ! a function jisko call karte waqt hum prefix me new keyword dete hai aur vo function ke andar this ka use huya ho vo function ko constructor function kehte hai
function createUser(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

let res = new createUser("nitesh", "emailmai@gmail.com", "psso");
let res2 = new createUser("rakesh", "emailmai", "psso");
// console.log(res);
// console.log(res2);

// !This is Generated one
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

//   const myAccount = new BankAccount("John Doe");

//! This is practiced one
class BankAccount {

  static totalUser = 0;
  #accountBalance;

  #incrementByOne = () => {
      this.#accountBalance += 1;
      // console.log("You can increase by one");
  };

  constructor(accountHolderName) {
      this.accountHolderName = accountHolderName;
      this.#accountBalance = 0;
      BankAccount.totalUser++;
  }

  deposit(amount) {
      if (amount > 0) {
          this.#accountBalance += amount;
          // console.log(`Deposited $${amount}. New balance: $${this.#accountBalance}`);
      } else {
          // console.log("Invalid deposit amount.");
      }
  }

  withdraw(amount) {
      if (amount > 0 && amount <= this.#accountBalance) {
          this.#accountBalance -= amount;
          // console.log(`Withdrew $${amount}. New balance: $${this.#accountBalance}`);
      } else if (amount > this.#accountBalance) {
          // console.log("Insufficient funds.");
      } else {
          // console.log("Invalid withdrawal amount.");
          this.#incrementByOne();
      }
  }

  getBalance() {
      return this.#accountBalance;
  }
}

const user1 = new BankAccount("Akshay");
// console.log(user1.getBalance());

// ! arrow function , all 3 types
let sum = (c) => c + 2;
// console.log(sum(2));

// rest operator
function add(a, b, ...c) {
  // console.log(a + b);
  // console.log(c);
}
add(2, 3, 4, 5, 6);
