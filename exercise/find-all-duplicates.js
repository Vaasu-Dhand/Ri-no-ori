/**
 * Given an integer array nums of length n where all the integers are between 1 and n (inclusive),
 * some elements appear twice and others appear once.
 * Return an array of all the integers that appear twice.
 */

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

function findDuplicate(numbersArray) {
  const occurancesMap = {};
  const duplicatesArray = [];

  nums.forEach((num) => {
    if (occurancesMap[num]) {
      occurancesMap[num] = occurancesMap[num] + 1;
      duplicatesArray.push(num);
    } else {
      occurancesMap[num] = 1;
    }
  });
  return Array.from(new Set(duplicatesArray));
}

