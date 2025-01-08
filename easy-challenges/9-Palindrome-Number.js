// 9. Palindrome Number - https://leetcode.com/problems/palindrome-number/description/

// edge cases:
// letter / some form of grammer involved
// number has a 0 on the end (numbers can't start with a 0)

// pseudocode:
// convert x number into an array to loop through it (use .map())
// create a new array which is the reversed form of x

// two for loops to check idx[0] of numberArray === idx[0] of reversedNumberArray
// if it is true for all idx's of both arrays, return true, else false

var isPalindrome = function (x) {
  const numberArray = Array.from(String(x), Number);
  const reversedNumberArray = [...numberArray].reverse();

  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] !== reversedNumberArray[i]) {
      return false;
    }
  }
  return true;
};
