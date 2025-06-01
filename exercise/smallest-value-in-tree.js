import { BINARY_SEARCH_TREE } from "#utils/mock-data";

function smallestNode(tree) {
  // Assuming we don't know its a Binary Search Tree

  const queue = [];
  let minValue = Infinity;

  queue.push(tree);

  while (queue.length > 0) {
    const node = queue.shift();
    minValue = Math.min(minValue, node.value);

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.left);
    }
  }
  return minValue;
}

console.log(smallestNode(BINARY_SEARCH_TREE()));
