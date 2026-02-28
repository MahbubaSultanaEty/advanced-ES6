/* Callback Function (JavaScript – Simple Explanation)

 A callback function is a function that is passed as an argument to another function
 and is called (executed) later.

 In short: a function called by another
 */
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}


// 2nd example
greet("Mahbuba", sayBye);

function calculate(a, b, callback) {
  callback(a, b);
}

calculate(5, 3, (x, y) => {
  console.log(x + y);
});
