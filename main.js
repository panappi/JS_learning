/* テンプレートリテラル */
const name = "ココタ";
const weight = 500;

console.log(`ぼくの名前は${name}です`);
console.log(`今の体重は${weight}gです`);

/* 比較演算子 */
const age = 24;

// true
console.log(age >= 20);
console.log(age > 20);
// false
console.log(age < 20);
console.log(age <= 20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力
if (age >= 20) {
  console.log("私は20歳以上です");
}
