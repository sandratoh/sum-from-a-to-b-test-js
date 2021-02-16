
const sum = (fromN, toN) => {
  // Sum all the values from fromN up to toN

  // base case
  if (toN === fromN) {
    return fromN;
  }
  // recursion case: if number > fromN
  return toN + sum(fromN, toN - 1);
};


module.exports = sum;

// Logic:
// sum(0, 0) = 0
// sum(0, 1) = 1 + 0
// sum(0, 2) = 2 + 1 + 0
// sum(0, 3) = 3 + 2 + 1 + 0
// sum(0, 4) = 4 + 3 + 2 + 1 + 0

// Pattern:
// sum(0, 0) = 0
// sum(0, 1) = 1 + sum(0, 0)
// sum(0, 2) = 2 + sum(0, 1)
// sum(0, 3) = 3 + sum(0, 2)
// sum(0, 4) = 4 + sum(0, 3)

// RECURSION IMPLEMENTATION
// sum(fromN, toN) = toN + sum(fromN, toN - 1);
