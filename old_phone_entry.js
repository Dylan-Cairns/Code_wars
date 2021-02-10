function presses(phrase) {
  phrase = phrase.toLowerCase();
  const layout = '-1-abc2-def3-ghi4-jkl5-mno6-pqrs7-tuv8-wxyz9- 0';
  const dict = generateDict(layout);
  let totalPresses = 0;

  phrase.split('').forEach(ele => {
    totalPresses += dict[ele];
  });

  return totalPresses;
}

function generateDict(inpLayout) {
  let pressesDict = inpLayout.split('').reduce((acc, ele, idx, arr) => {
    if (ele !== '-') {
      let jdx = idx - 1;
      while (true) {
        if (arr[jdx] === '-') {
          break;
        } else {
          jdx -= 1;
        }
      }
      acc[ele] = idx - jdx;
    }
    return acc;
  }, {});

  return pressesDict;
}

console.log(presses('LOL'));

/* While this solution works, a much simpler solution
can be achieved by the following method: split the layout string on '-'.
Now instead of counting backwards from the current element, it's only necessary
to get the index of the letter and add 1 in order to get the number of
keypresses required.

Also note that the approach of generating a dictionary with the number of
keypresses for each character is only efficient if the map is saved between
function invokations; that is to say it must be outsure of the presses() fn.
*/