/* 分割代入 */
const animal = ["イヌ", "ネコ"];
const [animal1, animal2] = animal;
console.log(animal1, animal2);
// 下記と同義
// const dog = animal[0];
// const cat = animal[1];
// console.log(dog, cat);

const tea = {
  service1: "ミルク",
  service2: "レモン",
};
const { service1, service2 } = tea; // プロパティを変数として定義する
console.log(service1, service2);
// 下記と同義
// const milk = tea.service1;
// const lemon = tea.service2;
// console.log(milk, lemon);
