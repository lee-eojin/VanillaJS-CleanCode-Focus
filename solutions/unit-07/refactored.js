const EVEN_DIVISOR = 2;

const isEven = (number) => number % EVEN_DIVISOR === 0;

const filterEvenNumbers = (numbers) => numbers.filter(isEven);

module.exports = filterEvenNumbers;
