/**
 * BFS is a Binary tree (at most two children right and left) traversal algo
 * It uses a queue and loop to iterate through a tree level by levetl
 */

function bfs(tree) {
  const queue = [];

  queue.push(tree);
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
}

function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}

const tree = {
  ...node(1),
  left: { ...node(2), left: { ...node(4) }, right: node(3) }, // FIXED here
  right: { ...node(5), left: { ...node(10) }, right: node(15) },
};

console.log(bfs(tree));
