// undefined means a variable has been declared, but it hasn't been given a value yet. It’s like a placeholder that JavaScript puts there automatically.
let name; 
console.log(name); // undefined (You didn't give it a value)

// typeof undefined returns "undefined". It is its own type. It simply means "nothing has been placed here yet."
console.log(typeof name);

// cases where you will get undefined
const employee = {};
console.log(employee.age); // undefined (The property doesn't exist)

function greet() {
    console.log("hello");
    return;
}
const result= greet()
console.log(result); // undefined (The function didn't return 
// anything it just has the return keyword in it)



    /* null is a value that you actively assign to a variable to say "this is empty" or "this has no value on purpose" */
let currentUser = null; 
console.log(currentUser);
let searchResult = null; 
console.log(searchResult);

// typeof null returns "object".
console.log(typeof currentUser) //output: object

// This is a very famous bug from the very first version of javascript. It was suppossed to be its own type. But because of how data was stored in the memory back then. It was never fixed because it would break millions of old websites

console.log(null == undefined); //output: true [because both of them are falsy values , both of them represent nothingness]

console.log(null === undefined); //output: false [because strict equality operator represents checks if the value and typeof both are the same. So in this case their value might be same but their typeof isn't same]