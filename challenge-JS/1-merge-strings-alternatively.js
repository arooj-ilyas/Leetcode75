/* 
PROBLEM:
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string. 
*/

/*
EXAMPLE:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

/*
CONSTRAINTS:
1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

/*
APPROACH:
- Create an empty string called mergedString to store the merged characters from word1 and word2.
- Start looping to iterate over corresponding characters of word1 and word2 simultaneously.
- For each pair of characters, append their concatenation with looped character at index[i] -> mergedString += wordX[i].
- For statement will continue to loop until end maxLength reached (i.e. additional letters appended to end of mergedString)
- Return the concatenated string as the result of the mergeAlternately method.
*/

// [Link to solution](https://leetcode.com/problems/merge-strings-alternately/solutions/6066647/js-solution-merge-strings-alternatively/)

var mergeAlternately = function (word1, word2) {
  let mergedString = "";
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < word1.length) {
      mergedString += word1[i];
    }
    if (i < word2.length) {
      mergedString += word2[i];
    }
  }
  return mergedString;
};
