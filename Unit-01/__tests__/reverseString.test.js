const reverseString = require("../reverseString");

test("문자열 뒤집기", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("a")).toBe("a");
  expect(reverseString("")).toBe("");
});
