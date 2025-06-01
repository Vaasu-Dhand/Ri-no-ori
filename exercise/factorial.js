// tags: ['recursion', 'easy', 'math']
/**
 * Given a number n. find the factorial of that number
 */

function factorialRecursive(num) {
    if (num === 1) return num * (num - 1);
    let sum = 0
    return factorialRecursive(num - 1);
}

function factorialLoop(num) {
  let sum = num;
  for (let i = num; i > 1; --i) {
    sum = sum * (i - 1);
  }
  return sum;
}

console.log(factorialLoop(6));
