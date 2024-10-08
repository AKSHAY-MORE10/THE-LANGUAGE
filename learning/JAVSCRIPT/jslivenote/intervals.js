// let start = document.getElementsByClassName('btn')[0];
// let stop = document.getElementsByClassName('btn1')[0];



// //? setInterval,clearInterval

// let interval = setInterval// it is declared for saving the intervals(id)




// start.addEventListener('click',function(e) {
//     interval = setInterval(function() {
//         console.log("hello world")
//     },1000)
// })

// stop.addEventListener('click',function(e) {
//     interval = clearInterval(interval)
// });




// start.addEventListener('click', function(e) {
//     interval = setInterval(function() {
//         console.log("Awesome");
//     },1000)

// })

// stop.addEventListener('click',function(e) {
//     clearInterval(interval)
// });



//! 2.example
// let intervalid = setInterval(function() {
//     console.log("This will in every 5sec");
// }, 5000);

// setTimeout(function() {
//     clearInterval(intervalid);
//     console.log("Interval cleared now it wont print");
// }, 15000);



//? setTimeout, clearTimeout

// setTimeout schedules a function to run after a delay.
// clearTimeout cancels a scheduled timeout, preventing the function from running if it hasn’t already.

// !1
// let timeoutID = setTimeout(function(){
//     console.log("it will not print bcz before it excutes clearout has been called");
// },1000)

// clearInterval(timeoutID)


// !2
// let timeoutID = setTimeout(function() {
//     console.log("This will be printed");
// }, 3000);

// let cleartime = setTimeout(function() {
//     clearTimeout(timeoutID);  
//     console.log("Timeout cleared before it could print.");
// }, 2000);

//!! 2.example
// let timeoutID = setTimeout(function() {
//     console.log("This will not be printed");
// }, 1000);

// clearTimeout(timeoutID); // Cancels the timeout


// let intervalID = setInterval(function() {
//     console.log("This will in every 3sec");
// }, 3000);

// setTimeout(function() {
//     clearInterval(intervalID);
//     console.log("Interval cleared now it wont print");
// }, 15000);


// let startButtons = document.querySelectorAll('.btn');
// let stopButtons = document.querySelectorAll('.btn1');

// let intervalID;

// Add click event listeners to all start buttonsqa
// startButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         intervalID = setInterval(function() {
//             console.log("Awesome");
//         }, 1000);
//     });
// });

// Add click event listeners to all stop buttons
// stopButtons.forEach(button => {
//     button.addEventListener('click', function() {
//         clearInterval(intervalID);
//     });
// });


// Function to find the GCD of two numbers
// function findGCD(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// Example usage
// const num1 = 48;
// const num2 = 18;

// const gcd = findGCD(num1, num2);
// console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);

 

// //?  JSON.parse() and JSON.stringify()

// let data = {
//     "name": "akshay",
//     "age": 19,
//     "course": "BCA"
// };
// if you want to convert js object data to json so we use JSON.stringify
// let jsObj = {
//     NAME: "akshay",
//     age: 11,
// }

// let jsToJson = JSON.stringify(jsObj);
// console.log(jsToJson);

// let jsonToJs = JSON.parse(jsToJson);
// console.log(jsonToJs);



// it Converts the object to a JSON string
// let jsonString = JSON.stringify(data);


// Parse the JSON string back into a JavaScript object
// let jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);



// Object in different ways

//! method 1
// const stud = {
//     name:"akshay",
//     age:19,
//     course:"BCA",

//     getInfo:function() {
//         console.log("Hello, " + this.name + ", " + this.age + " years old, " + this.course + " course");
//     }

// }
// stud.getInfo()


//! method 2

// let info = Object.create(null);
// info.name = "akshay"
// info.age = 21
// info.course = "MCA"
// info.getInfo = function() {
//     console.log("Hello, " + this.name + ", " + this.age + " years old, " + this.course + " course");
// }
// info.getInfo()

// ! method 3 by using new keyword
// let info = new Object();
// info.name = "akshay"
// info.age = 21
// info.course = "MCA"
// info.getInfo = function() {
//     console.log("Hello, " + this.name + ", " + this.age + " years old, " + this.course + " course");
// }
// info.getInfo()



// !1. Function Declaration
// ak()

// function ak(){
//     console.log("hello world")
// }; 




//? 2. Function Expression


// let aks = function(){
//     console.log("hello world1")
// }
// aks()


//! 3. Anonymous Function
// it does not has its own identity anonymous function is used where functions are used as values 

// let nit = function(){
//     console.log("hello world")
// }
// nit()






//! 4. IIFE(Immediately Invoked Function Expression)  

// global scope ke pollution se problem hote hai is liya IIFE use karta hai 
// wo direct call hota hai
// This is commonly used to create a private scope for variables to avoid polluting the global namespace.

(function info(name){
    console.log(`hello ${name}`)
})('akshay');


( () => {
    console.log("hello world2")
})()





 
// info()
// function info(){
//     console.log("hello world")
// };
// info()


//! 2. Function Expression

// info2() we cant call the function before declaring it in {function expression}
// let info2 = function(){
//     console.log("hello world")
// }


// setInterval(function(){
//     console.log("hello world")
// },3000)


//! 3. Anonymous Function
// it does not has its own identity anonymous function is used where functions are used as values 


// function(){

// };

// let ak = function(){
//     console.log("hello world")
// };
// ak()


//! 4. IIFE(Immediately Invoked Function Expression)  

// global scope ke pollution se problem hote hai is liya IIFE use karta hai 
// wo direct call hota hai
// This is commonly used to create a private scope for variables to avoid polluting the global namespace.

// (function (){
//     console.log("hello world1")
// }());


// named IIFE
// (function(name){
//     console.log(`hello ${name}`);
// })("akshay");

    // (() => {
    //     console.log("hello world2")
    // })();



let res = (function (){
    let privatevar  ;
    return {

        getter:function(){
            return privatevar
        } ,
        setter:function(val){
       privatevar = val ;
        }
    }
}
)();

console.log(res.getter())

res.setter(20)
console.log(res.getter())




