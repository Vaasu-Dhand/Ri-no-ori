/**
 * @binarySearch
 * @optimization
 */

/**
 * You are given a boolean array floors of length n where:
	•	Each element is false up to a certain index k, and
	•	From k onwards, all elements are true.

This represents a building with n floors and two crystal balls. If you drop a crystal ball from a floor higher than k, it breaks. If you drop it from a floor lower than or equal to k, it survives.

You can only drop a ball from a floor to test it. Once a ball breaks, it can’t be used again.

Your goal: Find the first floor index k where true begins, using at most 2 crystal balls and minimizing the number of drops.

Input: [false, false, false, false, true, true, true]
Output: 4
 */

function findBreakingPointHalfBinarySearch(boolArray) {
  // Standard Binary Search ->

  let didBallBreak = false;
  if (boolArray.length === 0) return -1;

  const midPoint = Math.floor((0 + boolArray.length - 1) / 2);
  const midValue = boolArray[midPoint];
  console.log({ midPoint, midValue });
  // midValue is true?
  if (true === midValue) {
    didBallBreak = true;
  } else {
    didBallBreak = false;
  }
  console.log({ midPoint, midValue, didBallBreak });
  // If ball broke, search the left half linearly
  if (didBallBreak) {
    for (let i = 0; i <= midPoint; i++) {
      if (boolArray[i]) {
        return i;
      }
    }
  } else {
    for (let i = midPoint; i < boolArray.length; i++) {
      if (boolArray[i]) {
        return i;
      }
    }
  }

  // If the ball did not break, search the right halp linearly
}

// console.log(
//   findBreakingPointHalfBinarySearch([
//     false,
//     false,
//     false,
//     false,
//     false,
//     true,
//     true,
//   ])
// );

/**
 * findBreakingPointHalfBinarySearch is slightly more performant than linear search
 * But, the most performant way to solve this problem is by choosing an interval and than
 * Checking if the ball breaks in that interval
 *  - If it breaks in that interval, we backtrack our pointer and linear search that interval
 *  - If it does not break, we move forward the pointer
 **/

function findBreakingPoint(boolArray) {
  const interval = Math.floor(Math.sqrt(boolArray.length));
  console.log({ interval });
  let brokeFromIndex = 0;
  for (let i = 0; i < boolArray.length; i = i + interval) {
    console.log(i, boolArray[i]);
    if (boolArray[i]) {
      brokeFromIndex = i - interval;
      break;
    }
  }

  //   Linear search from this interval to find the first true value
  for (let j = brokeFromIndex; j <= brokeFromIndex + interval; j++) {
    if (boolArray[j]) {
        return j
    }
  }
}

console.log(findBreakingPoint([false, false, false, false, true, true, true]));
