const filterEvenNumbers = require("../bad-code");

describe("리팩토링 - 짝수 필터링", () => {
  test("짝수만 반환한다", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
    expect(filterEvenNumbers([10, 15, 20, 25])).toEqual([10, 20]);
  });

  test("빈 배열을 반환한다", () => {
    expect(filterEvenNumbers([])).toEqual([]);
  });

  test("짝수가 없으면 빈 배열을 반환한다", () => {
    expect(filterEvenNumbers([1, 3, 5, 7])).toEqual([]);
  });

  test("모두 짝수면 모두 반환한다", () => {
    expect(filterEvenNumbers([2, 4, 6, 8])).toEqual([2, 4, 6, 8]);
  });

  test("0도 짝수로 처리한다", () => {
    expect(filterEvenNumbers([0, 1, 2])).toEqual([0, 2]);
  });
});
