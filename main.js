console.log("Hello World");

/* 定数・変数の定義 */
const a = 1;
// a = 2
console.log("const", a);

let b = 1;
b = 2;
console.log("let", b);

let c = a + b;
console.log("計算", c);
b = 5;
c = a + b;
console.log("再計算", c);

/* 配列 */
const array = [1, 2, 3, 4, 5];
console.log("配列", array);
console.log("配列2番目", array[1]);

const tenpura = ["なす", "さつまいも", 4];
console.log(tenpura);

/* オブジェクト */
const obj = {
  key: "value",
};
console.log("オブジェクト", obj);
console.log(obj.key);
console.log(obj["key"]);

/* 演算子 */
const add = 1 + 2;
console.log("足し算　1 + 2 =", add);

const sub = 1 - 2;
console.log("引き算　1 - 2 =", sub);

const mul = 1 * 2;
console.log("掛け算　1 * 2 =", mul);

const div = 1 / 2;
console.log("割り算　1 + 2 =", div);

let num = 1;
console.log("インクリメント演算子", num++); //numの中身を評価結果を返した後に計算する(num++前の値)
console.log(num); //上記の計算結果が反映されている
num++;
console.log(num);

let num2 = 1;
num2--;
console.log("デクリメント演算子", num2);

/* 比較演算子 */
// 厳密等価演算子 ===
const x = 1;
const y = 1;
const z = 2;
console.log("厳密等価演算子 x === y", x === y);
console.log("厳密等価演算子 x === z", x === z);

// 厳密不等価演算子　!==
console.log("厳密不等価演算子 x !== z", x !== z);
console.log("厳密不等価演算子 x !== y", x !== y);

// 等価演算子
const x2 = "1";
console.log("等価演算子 x == y", x == y);
console.log("等価演算子 x == z", x == z);
console.log("等価演算子 x == x2", x == x2);

// 不等価演算子
console.log("不等価演算子 x != z", x != z);
console.log("不等価演算子 x != x2", x != x2);
