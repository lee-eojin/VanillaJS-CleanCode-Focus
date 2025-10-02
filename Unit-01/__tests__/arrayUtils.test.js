const { sum, max } = require("../arrayUtils");

test("배열 합", () => {
  expect(sum([1,2,3])).toBe(6);
  expect(sum([])).toBe(0);
});

test("배열 최댓값", () => {
  expect(max([1,5,3])).toBe(5);
  expect(() => max([])).toThrow("empty array");
});
