import { reverseString } from "./index";
import { capitalize } from "./index";
import { caesarCipher } from "./index";
import { analyzeArray } from "./index";

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverseString", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("calculator", () => {
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
  };
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.divide(6, 2)).toBe(3);
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("caesarCipher wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOo");
});

test("caesarCipher ignores punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
