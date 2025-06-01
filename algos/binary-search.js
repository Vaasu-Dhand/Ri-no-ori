/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
   You must write an algorithm with O(log n) runtime complexity.

        Example 1:
        Input: nums = [-1,0,3,5,9,12], target = 9
        Output: 4
        Explanation: 9 exists in nums and its index is 4
 */
var search = function (nums, target) {
  if (nums.length === 0) return -1;

  function binarySearch(nums, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    const middleElement = nums[middleIndex];

    if (target === middleElement) {
      return middleIndex;
    }
    if (target < middleElement) {
      return binarySearch(nums, target, leftIndex, middleIndex - 1);
    }
    if (target > middleElement) {
      return binarySearch(nums, target, middleIndex + 1, rightIndex);
    }
    return -1;
  }
  return binarySearch(nums, target, 0, nums.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 10)); // -1
