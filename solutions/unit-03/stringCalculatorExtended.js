const DEFAULT_DELIMITER = /,|:/;
const CUSTOM_DELIMITER_PATTERN = /^\/\/(.)\n(.*)$/;

function parseTokens(text) {
  if (text === ""){
    return [];
  }
  if (text.startsWith("//")) {

    const match = text.match(CUSTOM_DELIMITER_PATTERN);
    const delimiter = match[1];
    const numbers = match[2];
    return numbers.split(delimiter);

  } else {
    return text.split(DEFAULT_DELIMITER);
  }

}

function toNumber(str) {
  const num = Number(str);

  if (Number.isNaN(num)) {
    throw new Error("invalid number: " + str);
  }
  if (num < 0) {
    throw new Error("invalid number: " + str);
  }

  return num;
}

function sum(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

function add(text) {
  const tokens = parseTokens(text);
  const numbers = tokens.map(toNumber);
  return sum(numbers);
}

module.exports = {
  add, parseTokens, toNumber, sum,
  DEFAULT_DELIMITER, CUSTOM_DELIMITER_PATTERN
};
