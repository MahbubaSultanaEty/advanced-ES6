// The find() method is a search tool that is almost like the filter methos but it only returns the first element in the array that fulfills the condition

const numbers = [1, 2, 3,4];
// This returns a new array containing all elements
const filtered = numbers.find(n => n < 0); 
console.log(numbers == filtered); // false

const even = numbers.find(n => n % 2 === 0);
console.log(even) // [ 2 ]

const friends = ["Fahim", "karim", "Sakina", "Jarina", "Fahima"];

const friendsWithFistLtrF = friends.find(fnd => fnd[0] === "F");
console.log(friendsWithFistLtrF); //[ 'Fahim' ]

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

const olderStudents = students.find(student => student.age > 30);
console.log(olderStudents) //output: { name: 'Mahima', age: 32 }