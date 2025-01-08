// 1. Two Sum - https://leetcode.com/problems/two-sum/description/

// declare empty output array
// for loop over nums array -> start with idx[0]
// for loop again at idx pos + 1
// if statement, if for loop 1 + for loop 2 = target, post idx pos into array

var twoSum = function (nums, target) {
  const outputArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        outputArr.push(i, j);
      }
    }
  }

  return outputArr;
};
