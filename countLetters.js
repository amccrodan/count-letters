function countLetters(inputString) {
  stringObj = {};

  for (var i = 0; i < inputString.length; i++) {
    var char = inputString.charAt(i);

    if (char === " ") {
      continue;
    }

    if (stringObj[char]) {
      stringObj[char] += 1;
    } else {
      stringObj[char] = 1;
    }
  }

  return stringObj;
}

console.log(countLetters("This is a test"));