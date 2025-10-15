const {
  countFrequency,
  findMostFrequent,
  findDuplicates
} = require("../lottoStats");

describe("Map/Set 활용 - 로또 통계", () => {
  describe("countFrequency", () => {
    test("각 번호의 출현 횟수를 센다", () => {
      const numbers = [1, 2, 3, 1, 2, 1];
      const result = countFrequency(numbers);
      expect(result.get(1)).toBe(3);
      expect(result.get(2)).toBe(2);
      expect(result.get(3)).toBe(1);
    });

    test("빈 배열은 빈 Map 반환", () => {
      const result = countFrequency([]);
      expect(result.size).toBe(0);
    });
  });

  describe("findMostFrequent", () => {
    test("가장 많이 나온 번호를 반환", () => {
      const numbers = [1, 2, 3, 1, 2, 1];
      expect(findMostFrequent(numbers)).toEqual([1]);
    });

    test("동점이면 모두 반환", () => {
      const numbers = [1, 2, 3, 1, 2];
      const result = findMostFrequent(numbers);
      expect(result.sort()).toEqual([1, 2]);
    });

    test("모든 번호가 같은 횟수면 모두 반환", () => {
      const numbers = [1, 2, 3];
      const result = findMostFrequent(numbers);
      expect(result.sort()).toEqual([1, 2, 3]);
    });
  });

  describe("findDuplicates", () => {
    test("중복된 요소만 반환", () => {
      const arr = [1, 2, 3, 1, 2, 4];
      const result = findDuplicates(arr);
      expect(result.sort()).toEqual([1, 2]);
    });

    test("중복이 없으면 빈 배열", () => {
      expect(findDuplicates([1, 2, 3])).toEqual([]);
    });

    test("빈 배열은 빈 배열 반환", () => {
      expect(findDuplicates([])).toEqual([]);
    });
  });
});