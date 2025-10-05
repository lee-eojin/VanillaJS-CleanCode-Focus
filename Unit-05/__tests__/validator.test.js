const { isValidInput, parseInput, ERROR_MESSAGES } = require("../validator");

describe("입력 검증", () => {
  describe("isValidInput", () => {
    test("올바른 입력은 true", () => {
      expect(isValidInput("123")).toBe(true);
      expect(isValidInput("456")).toBe(true);
    });

    test("길이가 다르면 에러 메시지", () => {
      expect(isValidInput("12")).toBe(ERROR_MESSAGES.INVALID_LENGTH);
      expect(isValidInput("1234")).toBe(ERROR_MESSAGES.INVALID_LENGTH);
    });

    test("숫자가 아니면 에러 메시지", () => {
      expect(isValidInput("abc")).toBe(ERROR_MESSAGES.NOT_NUMBER);
      expect(isValidInput("12a")).toBe(ERROR_MESSAGES.NOT_NUMBER);
    });

    test("범위를 벗어나면 에러 메시지", () => {
      expect(isValidInput("012")).toBe(ERROR_MESSAGES.INVALID_DIGIT);
      expect(isValidInput("190")).toBe(ERROR_MESSAGES.INVALID_DIGIT);
    });

    test("중복이 있으면 에러 메시지", () => {
      expect(isValidInput("112")).toBe(ERROR_MESSAGES.DUPLICATE_DIGIT);
      expect(isValidInput("121")).toBe(ERROR_MESSAGES.DUPLICATE_DIGIT);
    });
  });

  describe("parseInput", () => {
    test("문자열을 숫자 배열로 변환", () => {
      expect(parseInput("123")).toEqual([1, 2, 3]);
      expect(parseInput("456")).toEqual([4, 5, 6]);
    });
  });
});