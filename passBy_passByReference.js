        // Pass by Value vs Pass by ReferenceWhen you pass a primitive value, JavaScript passes a copy of it. Doesn't change the original data

/*Primitive types:
number, string, boolean, null, undefined, symbol, bigint */

let a = 10;

function change(x) {
  x = 20;
}

change(a);
console.log(a); // 10

// example: 02
function double(num) {
  num = num * 2;
  return num;
}

let n = 7;
let result = double(n);

console.log(n);      // 7 
console.log(result); // 14




        /*Pass by Reference (Actually: Pass by Reference to Object)

When you pass an object or array, JavaScript passes a reference (address) to it. So it changes the  original data

Non-primitive types:
object, array, function */
let user = { name: "Mahbuba" };

function update(obj) {
  obj.name = "Sultana";
}

update(user);
console.log(user.name); // Sultana

let numbers = [1, 2, 3];

function add(arr) {
    arr[2]= 5
  arr.push(4);
}

add(numbers);
console.log(numbers); // [1, 2, 3, 4]

// example: 02
let point = { x: 2, y: 3 };

function move(p) {
  p.x += 5;
  p.y += 5;
}

move(point);

console.log(point); // { x: 7, y: 8 } 