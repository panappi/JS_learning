/* Nullish coalescing演算子 */
let fruits = "banana";
let result = fruits ?? "nullっぽい";
console.log("banana -> " + result); // banana

fruits = null;
result = fruits ?? "nullっぽい";
console.log("null -> " + result); // nullっぽい

fruits = undefined;
result = fruits ?? "nullっぽい";
console.log("undefined -> " + result); // nullっぽい

fruits = "";
result = fruits ?? "nullっぽい";
console.log('"" -> ' + result); // ""

fruits = 0;
result = fruits ?? "nullっぽい";
console.log("0 -> " + result); // 0

fruits = [];
result = fruits ?? "nullっぽい";
console.log("[] -> " + result); // []

let juice; // 未定義
console.log(juice ?? "nullっぽい"); // nullっぽい
