
const sum = (fromN, toN) => {
  // Sum all the values from fromN up to toN
  let sum = 0;
  // recursion case: if number > fromN

  // base case: if number is fromN
  sum += fromN;
  return sum;
};

// };

module.exports = sum;

// sum (0) = 0
// sum (0, 1) = 1 + 0
// sum (0, 2) = 2 + 1 + 0
// sum (0, 3) = 3 + 2 + 1 + 0
// sum (0, 4) = 4 + 3 + 2 + 1 + 0
