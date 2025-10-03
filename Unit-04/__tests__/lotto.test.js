const {
  generateRandomNumber,
  generateLottoNumbers,
  sortNumbers,
  LOTTO_MIN,
  LOTTO_MAX,
  LOTTO_COUNT
} = require("../lotto");

describe("로또 번호 생성기", () => {
  describe("generateRandomNumber", () => {
    test("min과 max 사이의 숫자를 반환한다", () => {
      const result = generateRandomNumber(1, 10);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    });

    test("여러 번 호출해도 범위 내의 숫자를 반환한다", () => {
      for (let i = 0; i < 100; i++) {
        const result = generateRandomNumber(1, 45);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(45);
      }
    });
  });

  describe("generateLottoNumbers", () => {
    test("6개의 숫자를 반환한다", () => {
      const numbers = generateLottoNumbers();
      expect(numbers).toHaveLength(LOTTO_COUNT);
    });

    test("모든 숫자가 1~45 범위이다", () => {
      const numbers = generateLottoNumbers();
      numbers.forEach(num => {
        expect(num).toBeGreaterThanOrEqual(LOTTO_MIN);
        expect(num).toBeLessThanOrEqual(LOTTO_MAX);
      });
    });

    test("중복된 숫자가 없다", () => {
      const numbers = generateLottoNumbers();
      const uniqueNumbers = new Set(numbers);
      expect(uniqueNumbers.size).toBe(LOTTO_COUNT);
    });
  });

  describe("sortNumbers", () => {
    test("숫자를 오름차순으로 정렬한다", () => {
      const result = sortNumbers([5, 2, 8, 1, 9]);
      expect(result).toEqual([1, 2, 5, 8, 9]);
    });

    test("원본 배열을 변경하지 않는다", () => {
      const original = [5, 2, 8];
      const result = sortNumbers(original);
      expect(original).toEqual([5, 2, 8]);
      expect(result).not.toBe(original);
    });
  });
});