// Given a number `n`. Calculate the sum of first natural numbers till 1..n

function summation(n) {
  let sum = 0;
  Array.from({ length: n }).forEach((_, i) => {
    sum += i + 1
  })
  return sum;
}

console.log(summation(4))
