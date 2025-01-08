// 13. Roman to Integer - https://leetcode.com/problems/roman-to-integer/description/

// edge cases: a letter other than those specified is written, grammer is present, not capitalized

// declare an output value as 0 which will eventually be the output number that we will add to
// spread the array into a new variable to make it mutable

// loop through the input s and map each roman numberal to a value (could be done with KVP's)
// some 'subtraction' if statements to consider if value i+1 > i, then do subtraction:
// if I is before V -> display 4, if I is before X -> display 9
// if X is before L -> display 40, if X is before C -> display 90
// if C is before D -> display 400, if C is before M -> display 900

// add up the total value of all numberal values to display a final output value
var romanToInt = function (s) {
  let output = 0;
  let str = [...s.toUpperCase()];

  // Local key value pairs to define all roman number cases with their assigned value
  let romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < str.length; i++) {
    let currentValue = romanValues[str[i]];
    let nextValue = romanValues[str[i + 1]];

    // if statement to handle subtraction cases
    // pseudocode: if next value exists AND next value > current value, do subtraction instead of addition
    if (nextValue && nextValue > currentValue) {
      output = output + (nextValue - currentValue);
      i++;
    } else output += currentValue;
  }

  return output;
};
