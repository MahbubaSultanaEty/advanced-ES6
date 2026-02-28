/* == (Equality operator / Loose equality)
 Checks value only, not type.

 If the two values have different types, JavaScript tries to convert them to the same type before comparing. This is called type coercion.
 */
console.log(5 == '5' )      // true, because '5' is converted to number 5
console.log(0 == false )    // true, false is converted to 0
console.log(null == undefined) // true, these are considered equal in loose equality
console.log(1 == true) //true, These are considered equal inloose operator

// some wired == (loose eduality operator) behavior
console.log("1" == true)    //true [true is converted to a number 1 , "1" is converted to a number 1 and then compared]
console.log(false == "0")   //true [false is converted to a number 0 , "0" is converted to a number 0 and then compared]
console.log([5] == "5")     //true

// . In JavaScript, the "loose equality" operator (==) only performs type coercion if there is any primitive data in the comparison. Also there is onother explanation for these two result as "false"
console.log(NaN == NaN)     //false
console.log({} == {})       //false 
console.log([] == [])       //false

// .These comparisons return false because objects and arrays are compared by reference, not by value and in this case they aren't referenced by the same memory address
const x = [];
const y = x;
console.log(x == y); // true [because they were referenced by the same memory address]


         /* === (Strict equality) Checks value AND type. No type conversion happens in this case. If the types are different, it immediately returns false.*/
console.log(5 === '5'  )    // false, number vs string
console.log(0 === false )   // false, number vs boolean
console.log(null === undefined )// false, different types
