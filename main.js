// /* ループ, 反復処理 */
// // while
// let x = 1;
// while (x <= 10) {
//   console.log(x);
//   x++;
// }

// // do-while
// do {
//   console.log(x);
// } while (x <= 10);

// // for
// let total = 0;
// for (let i = 0; i < 10; i++) {
//   total += i + 1;
//   console.log(total, i);
// }
// console.log(total);

/* 関数(メソッド) */
function double(num) {
  console.log(num);
  return num * 2;
}
console.log(double(10));
// 関数式で匿名関数を変数に代入
const double2 = function (num) {
  return num * 2;
};
console.log(double2(20));
// Arrow関数(”function”の表記が不要)
const double3 = (num) => {
  return num * 2;
};
console.log(double3(30));
// 処理が1文の場合は”return”、”{}”を省略できる
const double4 = (num) => num * 2;
console.log(double4(40));
