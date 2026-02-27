// every single value has an inherent "Boolean" value. If you put it in an if statement, it will either evaluate to true (Truthy) or false (Falsy)

/* There are only a few values in JavaScript that are Falsy. If it's not on this list, it's Truthy. 
- false: The keyword itself.
- 0, -0, and 0n (BigInt zero): Any form of zero.
- "" (Empty string): A string with no characters inside.
- null: Explicitly empty.
- undefined: Uninitialized/Missing.
- NaN: Not-a-Number (the result of bad math). 
*/

// the ! operator is called the Logical NOT (or "Bang") operator. Its job is to flip a value to its opposite boolean state.

if (!false) {
    console.log("now it will take the truthy values")
}

// The !! (Double Bang) operator is simply two Logical NOT (!) operators used together. It is a shortcut to flip two times the  actual boolean (true or false) equivalent.

if (!!false) {
    console.log("this wil take false value now.")
}