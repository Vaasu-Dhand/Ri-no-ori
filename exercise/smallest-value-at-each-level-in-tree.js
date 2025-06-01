/**
 *    10
     /  \
    5    15
   / \   / \
  3   8 12  18
BFS Problem: Find the Smallest Value at Each Level

Problem Statement:
Given the tree() structure, use a Breadth-First Search (BFS) algorithm to find and return the smallest value present at each level of the tree.

Expected Output for your tree():
[10, 5, 3]

 */
import { BINARY_SEARCH_TREE } from "#utils/data";

function smallestValueAtLevel(head) {
  if (!head) {
    return []; // Handle an empty tree case
  }

  const result = []; // This will store the smallest value for each level
  const queue = [];

  queue.push(head); // Start with the root node

  while (queue.length > 0) {
    // Get the number of nodes at the current level.
    // This is crucial for processing nodes level by level.
    const levelSize = queue.length;
    let minValCurrentLevel = Infinity; // Initialize min for the current level

    // Iterate through all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // Dequeue a node from the current level

      // Update the minimum value for the current level
      minValCurrentLevel = Math.min(minValCurrentLevel, node.value);

      // Enqueue children of the current node for the next level
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    // After processing all nodes at the current level, add its minimum to the result
    result.push(minValCurrentLevel);
  }

  return result;
}

console.log(smallestValueAtLevel(BINARY_SEARCH_TREE())); // [10, 5, 3]
