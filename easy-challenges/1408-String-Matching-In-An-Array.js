// 1408. String Matching in an Array - https://leetcode.com/problems/string-matching-in-an-array/

// Initialize an array to hold our result of substrings
// Iterate through each word in the array
// Inner loop to compare the current word with others
// Check if the current word is not the targetWord and includes the targetWord as a substring
// If conditions met, add the targetWord to our result array
// Break out of the inner loop as we have found the targetWord as a substring
// Return the array containing all found substrings

var stringMatching = function (words) {
  let substringsArr = [];

  for (const targetWords of words) {
    for (word of words) {
      if (word !== targetWords && word.includes(targetWords)) {
        substringsArr.push(targetWords);
        break;
      }
    }
  }

  return substringsArr;
};
