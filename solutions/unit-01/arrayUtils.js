function sum(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

function max(arr) {
  return Math.max(...arr);
}

module.exports = { sum, max };
