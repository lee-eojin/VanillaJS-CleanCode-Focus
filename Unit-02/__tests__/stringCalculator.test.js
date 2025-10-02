const { add } = require("../stringCalculator");

test("빈 문자열은 0", () => {
  expect(add("")).toBe(0);
});

test("쉼표/콜론 구분자", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1:2:3")).toBe(6);
  expect(add("10,20:30")).toBe(60);
});

test("음수는 예외", () => {
  expect(() => add("-1,2")).toThrow("invalid number");
});
