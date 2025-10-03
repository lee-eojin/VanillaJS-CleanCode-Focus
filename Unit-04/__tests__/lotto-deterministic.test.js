const {
  generateRandomNumber,
  generateLottoNumbers,
  LOTTO_MIN,
  LOTTO_MAX,
  LOTTO_COUNT
} = require("../lotto");

// 테스트용 결정적 랜덤 생성기 (시드 기반)
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }

  generateNumber(min, max) {
    // Linear Congruential Generator
    this.seed = (this.seed * 1103515245 + 12345) % 2147483648;
    return min + (this.seed % (max - min + 1));
  }
}

describe("로또 번호 생성기 (결정적 테스트)", () => {
  describe("generateRandomNumber with seeded generator", () => {
    test("같은 시드면 같은 결과", () => {
      const rng1 = new SeededRandom(12345);
      const rng2 = new SeededRandom(12345);

      const result1 = generateRandomNumber(1, 10, rng1);
      const result2 = generateRandomNumber(1, 10, rng2);

      expect(result1).toBe(result2);
    });

    test("다른 시드면 다른 결과", () => {
      const rng1 = new SeededRandom(12345);
      const rng2 = new SeededRandom(54321);

      const result1 = generateRandomNumber(1, 10, rng1);
      const result2 = generateRandomNumber(1, 10, rng2);

      expect(result1).not.toBe(result2);
    });
  });

  describe("generateLottoNumbers with seeded generator", () => {
    test("같은 시드면 같은 로또 번호", () => {
      const rng1 = new SeededRandom(12345);
      const rng2 = new SeededRandom(12345);

      const result1 = generateLottoNumbers(rng1);
      const result2 = generateLottoNumbers(rng2);

      expect(result1).toEqual(result2);
    });

    test("재현 가능한 테스트", () => {
      const rng = new SeededRandom(99999);
      const numbers = generateLottoNumbers(rng);

      expect(numbers).toHaveLength(LOTTO_COUNT);
      expect(new Set(numbers).size).toBe(LOTTO_COUNT);
      numbers.forEach(num => {
        expect(num).toBeGreaterThanOrEqual(LOTTO_MIN);
        expect(num).toBeLessThanOrEqual(LOTTO_MAX);
      });
    });
  });
});