/* eslint-disable max-lines-per-function */
function tripledouble(num1, num2) {
  let counter = 0;
  let storeddigits = [];
  let arg1 = String(num1);
  let arg2 = String(num2);
  console.log(num1, num2);

  for (let idx = 1; idx <= arg1.length; idx++) {
    if (arg1[idx] === arg1[idx - 1]) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter === 2) {
      storeddigits.push(arg1[idx]);
    }
  }

  if (storeddigits.length === 0) {
    return 0;
  }

  for (let idx = 0; idx < storeddigits.length; idx++) {
    for (let jdx = 1; jdx <= arg2.length; jdx++) {
      if ((arg2[jdx - 1] === arg2[jdx]) && (arg2[jdx] === storeddigits[idx])) {
        return 1;
      }
    }
  }
  return 0;
}

console.log(tripledouble(1714489992555555,922955855));