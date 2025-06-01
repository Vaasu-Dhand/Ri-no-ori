import { BINARY_SEARCH_TREE, NON_BINARY_SEARCH_TREE } from "#utils/data";

function isBinarySearchTree(tree) {
  if (!tree) return false;
  // Do a BFS
  // At each level compare to check if the value in the array are in ascending order or not

  const queue = [tree];
  let isBinarySearchTree = true;
  while (queue.length > 0 && isBinarySearchTree) {
    const queueLength = queue.length;
    const row = [];

    for (let i = 0; i < queueLength; i++) {
      const node = queue.shift();
      row.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (isSorted(row)) {
      continue;
    } else {
      return false;
    }
  }

  return isBinarySearchTree;
}

function isSorted(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] <= array[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isBinarySearchTree(BINARY_SEARCH_TREE())); // true
console.log(isBinarySearchTree(NON_BINARY_SEARCH_TREE())); // false
