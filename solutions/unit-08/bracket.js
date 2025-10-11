const Stack = require('./stack');

const OPENING_BRACKETS = '([{';
const CLOSING_BRACKETS = ')]}';
const BRACKET_PAIRS = {
  ')': '(',
  ']': '[',
  '}': '{'
};

function isOpeningBracket(char) {
  return OPENING_BRACKETS.includes(char);
}

function isClosingBracket(char) {
  return CLOSING_BRACKETS.includes(char);
}

function isMatchingPair(opening, closing) {
  return BRACKET_PAIRS[closing] === opening;
}

function isValidBracket(str) {
  const stack = new Stack();

  for (let char of str) {
    if (isOpeningBracket(char)) {
      stack.push(char);
      continue;
    }

    if (isClosingBracket(char)) {
      if (stack.isEmpty()) {
        return false;
      }

      const top = stack.pop();
      if (!isMatchingPair(top, char)) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

module.exports = { isValidBracket };
