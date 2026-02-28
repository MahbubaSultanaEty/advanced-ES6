// reduce() হলো array এর সব element একসাথে process করে একটিমাত্র value তৈরি করার function।

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (const num of numbers) {
    sum = sum + num;
}

console.log(sum) //

const sum2 = numbers.reduce((acc/*accumulator: sum*/, curr /*currentvalue: num*/) => acc + curr, 0 /*initial value*/);

console.log(sum2); // 15