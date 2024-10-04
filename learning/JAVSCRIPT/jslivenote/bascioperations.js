// !what is var let and const in js?

// ?Scope:
// var: Function-scoped. If declared inside a function, it's only accessible within that function.
// let and const: Block-scoped. They are only accessible within the block {} they are declared in.

function testVar() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable (function-scoped)
    //   console.log(x);  // 2
    }
    console.log(x);  // 2 (because `var` is function-scoped)
  }
//   console.log(x);
  testVar();

// function testLet() {
//     let y = 1;
//     if (true){
//       let y = 2;  // different variable (block-scoped)
//     //   console.log(y);  // 2
//     } 
//     console.log(y);  // 1 (because `let` is block-scoped)
//   }


//   testLet();
  
  

// ?Hoisting:
// var: Variables are hoisted to the top and initialized with undefined, meaning you can use them before declaration (but it's not a good practice).
// let and const: They are also hoisted but not initialized. Accessing them before the declaration results in a ReferenceError (Temporal Dead Zone).

// console.log(a);  // undefined (because of hoisting)
// var a = 5;

// console.log(b);  // ReferenceError: Cannot access 'b' before initialization
// let b = 5;



// ?Reassignment:
// var: Can be reassigned and redeclared within the same scope.
// let: Can be reassigned but cannot be redeclared in the same scope.
// const: Cannot be reassigned or redeclared (though object properties can still be modified).
// var x = 10;
// var x = 20;  // redeclared
// x = 30;  // reassigned
// console.log(x);  // 30


// let y = 10;
// // let y = 20;  // SyntaxError: Identifier 'y' has already been declared
// y = 30;  // reassigned
// console.log(y);  // 30


// const z = 10;
// // z = 20;  // TypeError: Assignment to constant variable
// console.log(z);  // 10



// ?Initialization:
// var and let: Can be declared without being initialized.
// const: Must be initialized at the time of declaration.

// var and let (Can be declared without initialization):
// var a;
// let b;
// console.log(a);  // undefined
// console.log(b);  // undefined

// const (Must be initialized)
// const c;  // SyntaxError: Missing initializer in const declaration



// ?Global Object:
// var: Declaring a var in the global scope adds it as a property of the window object (in browsers).
// let and const: Do not add anything to the global window object.

// var x = 10;
// console.log(window.x);  // 10 (in browsers)

// let y = 10;
// const z = 20;
// console.log(window.y);  // undefined
// console.log(window.z);  // undefined



