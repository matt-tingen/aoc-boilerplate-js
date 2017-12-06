const test = require('ava');
const sumDigits = require('./partB');

const testSum = (t, input, expected) => {
  t.is(sumDigits(input), expected);
};
testSum.title = (title, input) => `sum of digits in ${input}`;

// Remove `.skip` and add the expected values when you're ready for part B
test.skip(testSum, '1212', null);
test.skip(testSum, '1221', null);
test.skip(testSum, '123425', null);
test.skip(testSum, '123123', null);
test.skip(testSum, '12131415', null);
