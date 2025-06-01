// Time Complexity: O(n²)

function bubbleSort(array) {
  function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  for (let i = 0; i < array.length; i++) {
    // Each iteration bubbles the largest element to the end
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 3, 4, 2, 5, 7, 6])); // [1, 2, 3, 4, 5, 6, 7]
