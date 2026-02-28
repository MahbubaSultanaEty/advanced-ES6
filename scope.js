/* Global Scope

 A variable declared outside any function or block is in the global scope.
It can be used anywhere in the program.
*/
let name = "Mahbuba"; // global scope

function sayHi() {
  console.log(name);
}

sayHi(); // Mahbuba

/*Block Scope

A block is anything inside { } like if, for, or while or a function.
*/

if (true) {
  let age = 20;
  const country = "Bangladesh";
}

// console.log(age);   output: Error

// let and const are block-scoped but var is NOT block-scoped. var creates confusion

// Function scope means:
// A variable declared inside a function can be used only inside that function, not outside.

const multiply = (a, b) => {
    const result = a * b;
    return result
}
// console.log(result);  output: error