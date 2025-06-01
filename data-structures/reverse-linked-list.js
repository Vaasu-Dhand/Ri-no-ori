// Given the head of a singly linked list, reverse the list, and return the reversed list.
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  // Implement your solution here
//   console.log(head);
  //   5 -> 6 -> 7 -> null
  //   H


//   prev keeps track of the new reversed list.
// 	2.	current moves through the original list.
// 	3.	At each step:
// 	•	Save the next node temporarily.
// 	•	Point current.next to prev (reversing the link).
// 	•	Move prev and current forward.
// 	4.	When done, prev points to the new head of the reversed list.

  let prev;
  let current;
  while (head.next) {
    let nextNode = head.next;
    current.next = head;
    prev = nextNode
    current = nextNode;
    // if (count === 0) {
    //     head.next= null
    // } else {
    //     pointer = head;
    //     head = pointer.next
    //     console.log(pointer.val)

    // }
    // count++
  }
}

console.log(
  reverseList({ val: 5, next: { val: 6, next: { val: 7, next: null } } })
);
