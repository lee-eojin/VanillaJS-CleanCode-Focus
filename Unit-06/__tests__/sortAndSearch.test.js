const { bubbleSort, binarySearch } = require("../sortAndSearch");

describe("정렬 & 탐색", () => {
  describe("bubbleSort", () => {
    test("배열을 오름차순으로 정렬한다", () => {
      expect(bubbleSort([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]);
      expect(bubbleSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
    });

    test("빈 배열을 반환한다", () => {
      expect(bubbleSort([])).toEqual([]);
    });

    test("이미 정렬된 배열도 처리한다", () => {
      expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("원본 배열을 변경하지 않는다", () => {
      const original = [5, 2, 8];
      const result = bubbleSort(original);
      expect(original).toEqual([5, 2, 8]);
      expect(result).not.toBe(original);
    });
  });

  describe("binarySearch", () => {
    test("정렬된 배열에서 값을 찾는다", () => {
      const arr = [1, 3, 5, 7, 9];
      expect(binarySearch(arr, 1)).toBe(0);
      expect(binarySearch(arr, 5)).toBe(2);
      expect(binarySearch(arr, 9)).toBe(4);
    });

    test("값이 없으면 -1을 반환한다", () => {
      const arr = [1, 3, 5, 7, 9];
      expect(binarySearch(arr, 2)).toBe(-1);
      expect(binarySearch(arr, 10)).toBe(-1);
    });

    test("빈 배열에서는 -1을 반환한다", () => {
      expect(binarySearch([], 5)).toBe(-1);
    });

    test("큰 배열에서도 효율적으로 탐색한다", () => {
      const arr = Array.from({ length: 1000 }, (_, i) => i);
      expect(binarySearch(arr, 500)).toBe(500);
      expect(binarySearch(arr, 999)).toBe(999);
      expect(binarySearch(arr, 1000)).toBe(-1);
    });
  });
});