const numbers = [1, 2, 3, 4];

/* const doubled= []

for (const num of numbers) {
        doubled.push(num*2)
    }

console.log(doubled) //[ 2, 4, 6, 8 ]
*/


        // The map() method is the standard way to make a new array using arrow function in one line

/*const doubleIt = num => num * 2;
const doubled = numbers.map(doubleIt);
console.log(doubled); //[ 2, 4, 6, 8 ] 
*/

// shortcut
const doubled = numbers.map(num => num * 2);
console.log(doubled) //[ 2, 4, 6, 8 ]


const friends = ["maya", "chaya", "roja"];
const firsletters = friends.map(firstletter => firstletter[0]);
console.log(firsletters);

const products = [
    { name: "laptop", price: 50000 },
    { name: "HeadPhone", price: 1000 },
    {name: "tablet", price: 10000}
]
const prices = products.map(product => product.price * 2);
console.log(prices);

const names = products.map((pd, index, productsArray) => {
    const upperCaseName = pd.name.toUpperCase();
    console.log(index, upperCaseName, productsArray );
    return upperCaseName;
})
console.log(names) /* output:0 LAPTOP [
//   { name: 'laptop', price: 50000 },
//   { name: 'HeadPhone', price: 1000 },
//   { name: 'tablet', price: 10000 }
// ]
// 1 HEADPHONE [
//   { name: 'laptop', price: 50000 },
//   { name: 'HeadPhone', price: 1000 },
//   { name: 'tablet', price: 10000 }
// ]
// 2 TABLET [
//   { name: 'laptop', price: 50000 },
//   { name: 'HeadPhone', price: 1000 },
//   { name: 'tablet', price: 10000 }
// ]
*/

const result = products.forEach(pd => console.log(pd.name));
console.log(result) //output: undefined

// unlike map for each doesnt return anything