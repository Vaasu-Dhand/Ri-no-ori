class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function tree() {
  return {
    ...new Node(10),
    right: { ...new Node(15), left: new Node(12), right: new Node(18) },
    left: { ...new Node(5), left: new Node(3), right: new Node(8) },
  };
}

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

console.log(smallestNode(tree()))
