// tags: ['array', 'medium', 'counting', 'retry']
// Imagine you have been given an array of integers, and a query number k.
// Your task is to write a function that finds all the triplets in the array that sum up to the query number k
/**
 * Input:
    nums = [1, 2, 3, 4, 5, 6]
    k = 6
    Output:
    count_triplets(nums, k) -> 1
    In this case, there is only one triplet that sums up to 6: (1, 2, 3).
 */

function countTriplet(nums, k) {
  const allCombinations = [];
  // Store all number combinations
  nums.forEach((element, index) => {
    nums.forEach((element2) => {
      nums.forEach((element3) => {
        allCombinations.push([element, element2, element3]);
      });
    });
  });


  const sortedArray = allCombinations.map(
    (array) => `${array.sort((a, b) => a - b)}`
  );
  const uniqueCombinations = Array.from(new Set(sortedArray)).map((string) => {
    const strArray = string.split(",").map((str) => Number(str));
    return strArray;
  });

  let count = 0;

  uniqueCombinations.forEach((combination) => {
    if (combination[0] + combination[1] + combination[2] === k) {
      count++;
    }
  });
  return count;
}

console.log(countTriplet([10, 10, 20, 30, 40], 60))
