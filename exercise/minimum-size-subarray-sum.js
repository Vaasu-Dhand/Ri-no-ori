// tags: ['array', 'medium', 'sliding-window']
/**
 * Leetcode:209 Minimum size subarray sum
 *
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

   Example 1:

   Input: target = 7, nums = [2,3,1,2,4,3]
   Output: 2
   Explanation: The subarray [4,3] has the minimal length under the problem constraint.
   
   Example 2:

   Input: target = 4, nums = [1,4,4]
   Output: 1
   
   Example 3:

   Input: target = 11, nums = [1,1,1,1,1,1,1,1]
   Output: 0
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // Dynamic Sliding Window
  let left = 0;
  let sum = 0;
  let minLengthOfArray = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target && left <= right) {
      sum -= nums[left];
      minLengthOfArray = Math.min(minLengthOfArray, right - left + 1);
      left++;
    }
    console.log({ left, right, minLengthOfArray });
  }

  return minLengthOfArray === Infinity ? 0 : minLengthOfArray;
};
