export function reverseString(str) {
  return str.split("").reverse().join("");
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function calculator() {
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
  };
  return calculator;
}

function shiftChar(char, shift) {
  const isUpperCase = char === char.toUpperCase();
  const baseCharCode = isUpperCase ? 65 : 97;
  const charCode = char.charCodeAt(0);

  return String.fromCharCode(
    ((charCode - baseCharCode + shift) % 26) + baseCharCode
  );
}

export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      if (/[a-zA-Z]/.test(char)) {
        return shiftChar(char, shift);
      }
      return char;
    })
    .join("");
}

export function analyzeArray(arr) {
  return {
    average: arr.reduce((acc, curr) => acc + curr, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
