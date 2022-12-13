/* FizzBuzz */
for (let num = 0; num <= 30; num++) {
  /* ----------------------------------------- */
  // const surplus3 = (num) => {
  //   return num % 3;
  // };
  // const surplus5 = (num) => {
  //   return num % 5;
  // };
  // // 3,5両方の余りが0のときと合致
  // // const surplus15 = (num) => {
  // //   return num % 15;
  // // };
  // // console.log(num, surplus3(num), surplus5(num), surplus15(num));

  // if (surplus3(num) === 0 && surplus5(num) === 0) {
  //   console.log("Fizz Buzz");
  // } else if (surplus3(num) === 0) {
  //   console.log("Fizz");
  // } else if (surplus5(num) === 0) {
  //   console.log("Buzz");
  // } else {
  //   console.log(num);
  // }

  /* ----------------------------------------- */
  const surplus = (num, x) => {
    return num % x;
  };
  if (surplus(num, 3) === 0 && surplus(num, 5) === 0) {
    console.log("Fizz Buzz");
  } else if (surplus(num, 3) === 0) {
    console.log("Fizz");
  } else if (surplus(num, 5) === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}
