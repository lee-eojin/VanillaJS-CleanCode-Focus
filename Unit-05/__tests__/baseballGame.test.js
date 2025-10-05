const {
  generateRandomDigits,
  countStrike,
  countBall,
  judge,
  DIGIT_COUNT
} = require("../baseballGame");

describe("숫자 야구 게임", () => {
  describe("generateRandomDigits", () => {
    test("3자리 숫자 배열을 반환한다", () => {
      const digits = generateRandomDigits();
      expect(digits).toHaveLength(DIGIT_COUNT);
    });

    test("모든 숫자가 1~9 범위이다", () => {
      const digits = generateRandomDigits();
      digits.forEach(digit => {
        expect(digit).toBeGreaterThanOrEqual(1);
        expect(digit).toBeLessThanOrEqual(9);
      });
    });

    test("중복된 숫자가 없다", () => {
      const digits = generateRandomDigits();
      const uniqueDigits = new Set(digits);
      expect(uniqueDigits.size).toBe(DIGIT_COUNT);
    });
  });

  describe("countStrike", () => {
    test("같은 위치의 같은 숫자 개수를 센다", () => {
      expect(countStrike([1, 2, 3], [1, 2, 3])).toBe(3);
      expect(countStrike([1, 2, 3], [1, 3, 2])).toBe(1);
      expect(countStrike([1, 2, 3], [3, 2, 1])).toBe(1);
      expect(countStrike([1, 2, 3], [4, 5, 6])).toBe(0);
    });
  });

  describe("countBall", () => {
    test("다른 위치의 같은 숫자 개수를 센다", () => {
      expect(countBall([1, 2, 3], [2, 1, 4])).toBe(2);
      expect(countBall([1, 2, 3], [3, 1, 2])).toBe(3);
      expect(countBall([1, 2, 3], [1, 2, 3])).toBe(0);
      expect(countBall([1, 2, 3], [4, 5, 6])).toBe(0);
    });
  });

  describe("judge", () => {
    test("스트라이크와 볼을 판정한다", () => {
      expect(judge([1, 2, 3], [1, 2, 3])).toEqual({ strike: 3, ball: 0 });
      expect(judge([1, 2, 3], [1, 3, 2])).toEqual({ strike: 1, ball: 2 });
      expect(judge([1, 2, 3], [3, 2, 1])).toEqual({ strike: 1, ball: 2 });
      expect(judge([1, 2, 3], [4, 5, 6])).toEqual({ strike: 0, ball: 0 });
    });
  });
});