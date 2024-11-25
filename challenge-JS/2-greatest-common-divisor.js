/* 
PROBLEM:
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2. 
*/

/*
EXAMPLE:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
*/

/*
CONSTRAINTS:
1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.
*/

/*
APPROACH:
- Base if: Make sure two strings can be added in both ways (str 1 + str 2 should equal str 2 + str 1), if not then words are not made up of same letters and will have no common letters
- Find the length of str1 and str2, and store it in variables for easier readability
- Determine the shorter of the two string lengths using Math.min and store value in a variable, this helps define the maximum possible length of the common substring.
- Start a for loop from minLength and decrement until 1 (we want the largest common substring).
- Inside the loop, check if both str1.length and str2.length % l === 0 to ensures that a substring of length l can divide both strings equally without remainders.
- If true, return substring from the start of str1 with length l using str1.substring(0, l) to get common substring
*/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }
  let minLength = Math.min(str1.length, str2.length);

  for (let l = minLength; l > 0; l--) {
    if (str1.length % l === 0 && str2.length % l === 0) {
      return str1.substring(0, l);
    }
  }
};
