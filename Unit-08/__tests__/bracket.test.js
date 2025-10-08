const { isValidBracket } = require("../bracket");

describe("괄호 유효성 검사", () => {
  test("올바른 괄호", () => {
    expect(isValidBracket("()")).toBe(true);
    expect(isValidBracket("()[]{}")).toBe(true);
    expect(isValidBracket("{[()]}")).toBe(true);
    expect(isValidBracket("((()))")).toBe(true);
  });

  test("잘못된 괄호", () => {
    expect(isValidBracket("(]")).toBe(false);
    expect(isValidBracket("([)]")).toBe(false);
    expect(isValidBracket("{{{")).toBe(false);
    expect(isValidBracket("}}}")).toBe(false);
  });

  test("빈 문자열은 올바른 괄호", () => {
    expect(isValidBracket("")).toBe(true);
  });
});
