// console.log("main.jsで記述してHTMLで読み込んだ","Hello World");

/* コメントアウト */
// Javascriptのコメントアウトは、// で行います。
/* で囲むと、複数行のコメントアウトができます。 */

/* 定数・変数 */
/*
  const は、定数を定義するときに使います。
  let は、変数を定義するときに使います。
  var は、古い書き方です。使わない。
*/

const a = 1; // aに1を代入
// a = 2; // 定数なので、エラーになります。
// console.log('const',a); // 1

let b = 1; // bに1を代入
b = 2; // 変数なので、エラーになりません。
// console.log('let', b); // 2

const c = a + b; // cにaとbを足した値を代入
// console.log('計算' ,c); // 3

/* 真偽値 */
const karubi = true; // karubiにtrueを代入
const harami = false; // haramiにfalseを代入


/* 配列(array) */
const array = [1,2,3,4,5];
// console.log('配列', array); // [1,2,3,4,5]
// console.log('配列の一番最初のデータ(0番目)', array[0]); // 1
// console.log('配列の一番最後のデータ(4番目)', array[4]); // 5
// console.log(array[5]); // undefined

const fruits = ['りんご', 'みかん', 'バナナ'];
// console.log('配列', fruits[1]); // みかん

/* オブジェクト(object) */
const obj = {
  key: "value",
  key2: "value2"
};
// console.log('オブジェクト', obj); // {key: "value"}
// ドット記法
// console.log(obj.key); // => "value"
// ブラケット記法
// console.log(obj["key"]); // => "value"

const prof = {
  name: "Taro",
  age: 20,
  hobby: "ゲーム"
};
// console.log('太郎の趣味は', profile.hobby); // ゲーム

/* 演算子 */
// 足し算
const add = 1 + 2;
// console.log('足し算 1 + 2 =', add); // 3

// 引き算
const sub = 1 - 2;
// console.log('引き算 1 - 2 =', sub); // -1

// 掛け算
const mul = 1 * 2;
// console.log('掛け算 1 * 2 =', mul); // 2

// 割り算
const div = 1 / 2;
// console.log('割り算 1 / 2 =', div); // 0.5

// 剰余
const rem = 5 % 2;
// console.log('剰余 5 % 2 =', rem); // 1

// インクリメント演算子
/*
  インクリメント演算子は、変数の値を1増やす演算子です。
  num++;
  1. console.log(num); // 1
  2. num = num + 1;
*/
let num = 1;
// console.log('num++', num++); // 1
// console.log('num', num); // 2
num++;
// console.log('もう一度num++した後のnum', num); // 3

// デクリメント演算子
let num2 = 1;
// console.log('num2--', num2--); // 1
// console.log('num2', num2); // 0
num2--;
// console.log('もう一度num2--した後のnum', num2); // -1

/* 比較演算子 */
// 厳密等価演算子 ===
// 左辺と右辺が等しいかどうかを判定します。
// 等しい場合はtrueを返します。
const x = 1;
const y = 1;
const z = 2;
// console.log('x === y', x === y); // true
// console.log('x === z', x === z); // false

// 厳密不等価演算子 !==
// 左辺と右辺が等しくないかどうかを判定します。
// 等しくない場合はtrueを返します。
// console.log('x !== y', x !== y); // false
// console.log('x !== z', x !== z); // true


// 等価演算子 ==
// 左辺と右辺が等しいかどうかを判定します。
// 等しい場合はtrueを返します。
const x2 = '1';
// console.log('x == y', x == y); // true
// console.log('x == z', x == z); // false
// console.log('x == x2', x == x2); // true
// console.log('x === x2', x === x2); // false

// 不等価演算子 !=
// 左辺と右辺が等しくないかどうかを判定します。
// 等しくない場合はtrueを返します。
// console.log('x != y', x != y); // false
// console.log('x != z', x != z); // true
// console.log('x != x2', x != x2); // false
// console.log('x !== x2', x !== x2); // true
