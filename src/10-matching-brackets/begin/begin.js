/* Implement a function that returns true, if the string parameter has properly nested and balanced square brackets. Brackets are considered matching if for each opening bracket there is a complementing closing bracket. This closing bracket must appear after the opening bracket and an appropriate place. The following table illustrates examples of both valid and invalid strings. For the purposes of this exercise, we only care about square brackets. */

function matchingBrackets(str) {
  let count = {};

  const strArr = str.split("");

  strArr.forEach((char) => {
    if (count[char] === undefined) count[char] = 0;
    if (char === "[") return count[char]++;
    else if (char === "]") return count[char]++;
  });

  if (count["["] === count["]"]) return true;
  else return false;
}

console.log(`${matchingBrackets("[hello][world]")} should be true`); // true
console.log(`${matchingBrackets("[hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[hello][world][]")} should be true`); // true
console.log(`${matchingBrackets("]hello]][world]")} should be false`); // false
console.log(`${matchingBrackets("[[[as;dfi")} should be false`); // false
