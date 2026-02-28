function multiply(a, b, c) {
    console.log( arguments); //output: [Arguments] { '0': 2, '1': 3, '2': 4 }
    return a * b * c;
}
multiply(2, 3, 4);
multiply(2, 3, 4,5,6,7);  //output: [Arguments] { '0': 2, '1': 3, '2': 4, '3': 5, '4': 6, '5': 7 }


// arguments retruns all  the arguments passed o a function in a array like object. you can even access any value by index 

function add(a, b){
    console.log(arguments[3]);
    const args = [...arguments]; // you can convert the arguments in a array using spread operator
    console.log(args) //[ 2, 4, 5, 6 ]
    return
}
add(2,4,5,6)