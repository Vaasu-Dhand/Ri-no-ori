import { Node } from "#utils/class";

//     10
//    /  \
//   5    15
//  / \   / \
// 3   8 12  18
export function BINARY_SEARCH_TREE() {
  return {
    ...new Node(10),
    right: { ...new Node(15), left: new Node(12), right: new Node(18) },
    left: { ...new Node(5), left: new Node(3), right: new Node(8) },
  };
}

//      10
//     /  \
//   5     15
//  / \    / \
// 3  12  8  18
export function NON_BINARY_SEARCH_TREE() {
  return {
    ...new Node(10),
    left: { ...new Node(5), left: new Node(3), right: new Node(12) }, // 🚨 12 violates BST rule
    right: { ...new Node(15), left: new Node(8), right: new Node(18) }, // 🚨 8 violates BST rule
  };
}
