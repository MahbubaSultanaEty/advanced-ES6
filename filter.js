// the filter() method follows the same rule as map(): it always returns a new array with a new memory reference. but it runs a condition and takes the value only if the condition's result is true

const numbers = [1, 2, 3,4];
// This returns a new array containing all elements
const filtered = numbers.filter(n => n < 0); 
console.log(numbers == filtered); // false

const even = numbers.filter(n => n % 2 === 0);
console.log(even) // [ 2, 4 ]

const friends = ["Fahim", "karim", "Sakina", "Jarina", "Fahima"];

const friendsWithFistLtrF = friends.filter(fnd => fnd[0] === "F");
console.log(friendsWithFistLtrF); //[ 'Fahim', 'Fahima' ]

const students = [
    {name: "Naved", age: 23},
    {name: "javed", age: 30},
    {name: "Mahima", age: 32},
    {name: "Fatema", age: 29},
    {name: "Mehrin", age: 33},
    {name: "Ayesha", age: 21},
    {name: "Maisha", age: 36},
    {name: "Manik", age: 23}
]

const olderStudents = students.filter(student => student.age > 30);
console.log(olderStudents)
// output:
/*
[
  { name: 'Mahima', age: 32 },
  { name: 'Mehrin', age: 33 },
  { name: 'Maisha', age: 36 }
]
*/