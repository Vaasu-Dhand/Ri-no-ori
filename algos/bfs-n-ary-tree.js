
/**
 *  n-ary tree (each node can have multiple children).
 */
class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

const root = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

root.children.push(b, c);
b.children.push(d, e);
c.children.push(f);

function bfs(root) {
  const queue = [];
  const result = [];

  queue.push(root);

  while (queue.length !== 0) {
    const currentNode = queue.shift();
    result.push(currentNode.value);

    for (const child of currentNode.children) {
      queue.push(child);
    }
  }

  return result;
}

console.log(bfs(root));