const { add } = require("../stringCalculatorExtended");

test("빈 문자열은 0", () => {
  expect(add("")).toBe(0);
});

test("기본 구분자: , :", () => {
  expect(add("1,2,3")).toBe(6);
  expect(add("1:2:3")).toBe(6);
});

test("커스텀 구분자 지원", () => {
  expect(add("//;\n1;2;3")).toBe(6);
  expect(add("//#\n10#20#30")).toBe(60);
});

test("음수 예외", () => {
  expect(() => add("-1,2")).toThrow("invalid number");
  expect(() => add("//;\n-1;2")).toThrow("invalid number");
});
