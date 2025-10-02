const DEFAULT_DELIMITER = /,|:/;

function splitNumbers(text) {
  return text.split(DEFAULT_DELIMITER);
}

function toNumber(str) {
  const num = Number(str);
  if (Number.isNaN(num)){
    throw new Error("invalid number: " + str);
  }
  if (num < 0) {
    throw new Error("invalid number: " + str);
  }
  return num;
}

function sum(numbers) {
  let total = 0;
  for (const num of numbers){
    total += num;
  }
  return total;
}

function add(text) {
  if (text === "") {
    return 0;
  }
  const stringNumbers = splitNumbers(text);

  const numbers = [];
  for (const str of stringNumbers){
    const num = toNumber(str);
    numbers.push(num);
  }

  return sum(numbers);
}

module.exports = { add, splitNumbers, toNumber, sum, DEFAULT_DELIMITER };
