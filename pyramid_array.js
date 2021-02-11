function pyramid(n) {
  if (n === 0) return [];

  let outputArr = [];

  for (let idx = 1; idx <= n; idx++) {
    let tempArr = Array(idx).fill(1);
    outputArr.push(tempArr);
  }

  return outputArr;
}

console.log(pyramid(5));