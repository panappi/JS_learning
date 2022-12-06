/* 条件分岐 (if, else) */
const level = 12;
if (level > 10) {
  console.log("レベルが10より大きいです");
}

const age = 17;
// 条件式が成り立たない場合に「if文」で条件を追加
if (age >= 20) {
  console.log("私は20歳以上です");
}
if (age < 20) {
  console.log("私は20歳未満です");
}

// 条件式が成り立たない場合に「else文」で条件を追加
if (age >= 18) {
  console.log("私は成人です");
} else {
  console.log("私は成人ではありません");
}

// 条件式が成り立たない場合に「else if文」で条件を追加
if (age >= 20) {
  console.log("私は20歳以上です");
} else if (age >= 10) {
  console.log("私は20歳未満ですが、10歳以上です");
} else {
  console.log("私は10歳未満です");
}

/* 論理演算子 */
const number = 50;
// 「&& (AND:かつ)」で条件を指定
if (number >= 10 && number < 100) {
  console.log("numberは2桁の数字です");
}

// 「|| (OR:または)」で条件を指定
if (number >= 100 || number % 2 === 0) {
  console.log("numberは100以上または偶数です");
}

// 「! (NOT:否定)」で条件を指定
// (!true なのでfalseを返す -> else の処理)
if (!number) {
  console.log("numberには値がはいっていません。");
} else {
  console.log("numberには値がはいっています。");
}
