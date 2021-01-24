/* eslint-disable max-len */
function list(names) {
  if (names.length === 0) return '';
  if (names.length === 1) return names[0].name;
  if (names.length === 2) return names[0].name + " & " + names[1].name;

  let outputStr = names[0].name;

  for (let idx = 1; idx < names.length - 1; idx++) {
    outputStr = outputStr.concat(", ", names[idx].name);
  }

  outputStr = outputStr.concat(" & " + names[names.length - 1].name);

  return outputStr;
}

console.log(list([{name: 'Bart'}]));