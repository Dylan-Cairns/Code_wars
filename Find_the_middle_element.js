function gimme (inputArray) {
  if ((inputArray[0] < inputArray[1]) && (inputArray[1] < inputArray[2])) {
    return 1;
  }

  if ((inputArray[2] < inputArray[1]) && (inputArray[1] < inputArray[0])) {
    return 1;
  }

  if ((inputArray[1] < inputArray[2]) && (inputArray[2] < inputArray[0])) {
    return 2;
  }

  if ((inputArray[0] < inputArray[2]) && (inputArray[2] < inputArray[1])) {
    return 2;
  }

  if ((inputArray[2] < inputArray[0]) && (inputArray[0] < inputArray[1])) {
    return 0;
  }

  if ((inputArray[1] < inputArray[0]) && (inputArray[0] < inputArray[2])) {
    return 0;
  }
}

