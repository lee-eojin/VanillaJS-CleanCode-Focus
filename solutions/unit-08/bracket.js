const Stack = require('./stack');

function isValidBracket(str) {
  const stack = new Stack();
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    else if (char === ')' || char === ']' || char === '}') {
      if (stack.isEmpty()) {
        return false;
      }
      const top = stack.pop();
      if (top !== brackets[char]) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

module.exports = { isValidBracket };
