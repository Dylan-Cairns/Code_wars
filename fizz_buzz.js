function fizzbuzz(n) {
  let arr = [];
  for (let idx = 1; idx <= n; idx++) {
    arr.push(idx);
  }

  arr.forEach((ele, index, array) => {
    if ((ele % 3 === 0) && (ele % 5 === 0)) {
      array[index] = 'FizzBuzz';
    } else if (ele % 3 === 0) {
      array[index] = 'Fizz';
    } else if (ele % 5 === 0) {
      array[index] = 'Buzz';
    }
  });

  return arr;
}
