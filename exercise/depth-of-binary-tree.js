import { BINARY_SEARCH_TREE } from "#utils/data";

function depth(head) {
  if (!head) return 0; // An empty tree has a depth of 0

  const queue = [head];
  let depth = 0; // Initialize depth to 0

  while (queue.length > 0) { // While there are nodes to process
    const levelSize = queue.length; // Capture the number of nodes at the current level

    depth++; // Increment depth for the current level being processed

    // Process all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Dequeue a node

      // Enqueue its children for the next level
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    // After this for loop, all nodes of the current level have been processed,
    // and their children (the next level) are now in the queue.
  }

  return depth; // Return the total depth (number of levels)
}

console.log(depth(BINARY_SEARCH_TREE()));
