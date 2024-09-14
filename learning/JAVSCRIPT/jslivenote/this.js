"use strict";




// function info(){
//     console.log(this)
// }
// info()


// const info = () => {
//     console.log(this)
// }
// info()










// let info = {
//     name:"akshay",
//     age:19,
//     username:function(){
//         console.log(`${this.name}, wellcome to live`)
//     }
//     }

// info.username()
// info.name = "nitesh"
// info.username()

// console.log(this) // {} empty bcz of node environment


//? this in functions
//! global in functions and window in browser
//! This inside non-strict mode (this substitution)


// outside of functions it is just a window object in the browser


// function code() {
//     let name = "akshay"
//     console.log(this.name) // This keyword function m use nhi kar sakta same in arrow functions(inside function is object)
// }
// // code()


// const arrfc = () => {
//     let name = "akshay"
//     console.log(this.name)//it is bcz of strict mode 
//     console.log(this) 
// }
// arrfc()


// console.log(this)


// const info = {
//     name : "akshay",
//     information : () => {
//         console.log(this.name)
//     }
//     }
//     info.information()
    


// function library (title, auther, isAvailable) {
//     this.title = title
//     this.auther = auther
//     this.isAvailable = isAvailable


//     this.isAvailable = () => {
//         if (this.isAvailable)
// {
//     this.isAvailable = true
//     console.log(`book is available ${this.isAvailable}`);
// } else if (this.isAvailable) {
//     log(`book is available ${this.isAvailable}`)
// }
//     }


// let book1 = new Library("story", "akshay", true)
// console.log(book1)
// }

// library.borrowbook();






// class Library {
//     constructor(title, author, isAvailable) {
//         this.title = title;
//         this.author = author;
//         this.isAvailable = isAvailable;
//     }

//     checkAvailability() {
//         if (this.isAvailable) {
//             console.log(`The book "${this.title}" is available.`);
//         } else {
//             console.log(`The book "${this.title}" is not available.`);
//         }
//     }

//     borrowBook() {
//         if (this.isAvailable) {
//             this.isAvailable = false;
//             console.log(`You have borrowed "${this.title}".`);
//         } else {
//             console.log(`The book "${this.title}" is not available for borrowing.`);
//         }
//     }
// }

// let book1 = new Library("Story", "Akshay", true);
// let book2 = new Library("Story", "Akshay", false);
// book1.checkAvailability();
// book1.borrowBook();
// book1.checkAvailability();

// console.log(book1);
// console.log(book2);




let str = "   akshay  "
let strimed = str.trim();

console.log([strimed.length()]);


