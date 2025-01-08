// 14. Longest Common Prefix - https://leetcode.com/problems/longest-common-prefix/description/

// edge case: If the array is empty, return an empty string

// Initialise prefix with whatever the value of strs[0] is
// Iterate through each character position: compare characters at the same position for different words
// Check the common prefix between the current prefix and each string
// Shorten the prefix until it matches the start of the current string

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];

  for (let i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
