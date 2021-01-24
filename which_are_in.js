function inArray(array1,array2) {
  let outArr = [];
  for (let idx = 0; idx < array1.length; idx++) {
    for (let jdx = 0; jdx < array2.length; jdx++) {
      if (array2[jdx].includes(array1[idx])) {
        outArr.push(array1[idx]);
        break;
      }
    }
  }
  return outArr.sort();
}


let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
let a1 = ["xyz", "live", "strong"];
console.log(inArray(a1, a2));

