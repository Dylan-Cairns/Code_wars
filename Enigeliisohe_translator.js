function toexuto(text) {
  const DICT = createDict();
  let output = "";
  for (let idx = 0; idx < text.length; idx++) {
    output = output.concat(text[idx]);
    if (DICT[text[idx].toLowerCase()]) {
      output = output.concat(DICT[text[idx].toLowerCase()]);
    }
  }
  return output;
}

function createDict() {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const VOWELS = "aeiou";
  const DICT = {};

  for (let idx = 0; idx < ALPHABET.length; idx++) {
    if (!VOWELS.includes(ALPHABET[idx])) {
      let jdx = idx - 1;
      while (jdx >= 0) {
        if (VOWELS.includes(ALPHABET[jdx])) {
          DICT[ALPHABET[idx]] = ALPHABET[jdx];
          break;
        }
        jdx--;
      }
    }
  }

  return DICT;
}

console.log(createDict());