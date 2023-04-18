/* Implement a function binary to decimal which takes a string of binary base 2 and returns the value in decimal base 10. The following diagram illustrates the process of converting from binary to decimal. */

function binaryToDecimal(binary) {
  const binaryArr = binary.split("");
  let isValidBinary = true;

  binaryArr.forEach((digit) => {
    if (digit !== "0" && digit !== "1") {
      isValidBinary = false;
    }
  });

  if (!isValidBinary) {
    return `${binary} is not a valid binary string`;
  }

  const decimal = parseInt(binary, 2);
  return decimal;
}

console.log(binaryToDecimal("101010")); // 42
console.log(binaryToDecimal("101100000")); // 352
console.log(binaryToDecimal("1")); // 1
console.log(binaryToDecimal("13298436")); // "13298436 is not a valid binary string"
console.log(binaryToDecimal("abc")); // "abc is not a valid binary string"
