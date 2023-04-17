const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let num = String(n);
    let result = 0;
    let i = 0;

  while (i < num.length) {
    result = Number(num[i]) + result;
    i = i+1;
  };

    let resStr = String(result);
    let result2 = 0;
    let j = 0;
    while (j < resStr.length) {
       result2 = Number(resStr[j]) + result2;
       j = j + 1;
    }
  return result2;
}

module.exports = {
  getSumOfDigits
};