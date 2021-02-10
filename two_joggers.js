function nbrOfLaps(x, y) {
  let commonFactor;
  let outArr = [];
  let counter = 1;

  while (true) {
    if ((counter % x === 0) && (counter % y === 0)) {
      commonFactor = counter;
      break;
    }
    counter++;
  }

  outArr.push(commonFactor / x);
  outArr.push(commonFactor / y);

  return outArr;
}

console.log(nbrOfLaps(4, 6));