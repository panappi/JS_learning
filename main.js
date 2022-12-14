// window.onload = () => {
// p0 = document.getElementById("p0");
// console.log(p0);

// p1 = document.createElement("p");
// p1.innerHTML = "既存のp要素の後にp要素を追加";
// document.body.appendChild(p1);
// console.log(p1);

// p2 = document.createElement("p");
// p2.innerHTML = "動的に追加されたp要素の後にp要素を追加";
// document.body.appendChild(p2);
// console.log(p2);
// };

// #sectionを取得する
// 下記はidのみ取得するDOM操作、”#”は不要、よく使う
const section = document.getElementById("section");
// 下記はhtmlタグ、id、classをすべて指定できるため、CSS同様に"#"、"."の表記が必要
// const section = document.querySelector("#section");

const h2 = document.createElement("h2");
h2.innerHTML = "section内にh2を追加";
// console.log(h2);
section.appendChild(h2);

// const h1 = document.getElementById("h1");
// console.log(h1);

document.getElementById("button1").onclick = function () {
  // ここに#buttonをクリックしたら発生させる処理を記述する
  h1.innerHTML = "Hello World";
  console.log(h1);
};

// htmlにロジック・処理が混入するのは良くないので下記をよく使う
button2.addEventListener("click", () => {
  h1.innerHTML = "こんにちは、世界";
  console.log(h1);
});

const changeH1 = () => {
  h1.innerHTML = "Hello world2";
};
