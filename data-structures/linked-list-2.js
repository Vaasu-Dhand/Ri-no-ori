//  1 → 2 → 3 → 4 → 5 → null

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get(index) {
    let indexCount = 0;
    let pointer = this.head;
    while (pointer) {
      if (index === indexCount) {
        return pointer.value;
      }
      indexCount++;
      pointer = pointer.next;
    }
  }

  insertAt(node, index) {
    // Insert at 0
    if (index === 0 || this.size === 0) {
      this.prepend(node.value);
    }
    // Insert at the end
    else if (index === this.size - 1) {
      let pointer = this.head;
      let indexCounter = 0
      const node = new Node(value);
      while (pointer && index !== indexCounter) {
        index++
        pointer = pointer.next
      }
    }

    // Insert in middle
  }

  prepend(value) {
    // create a new node
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
    } else {
      // point it to the head node
      node.next = this.head;
      // point head to the new node
      this.head = node;
    }
    this.size++;
  }

  //   print() {
  //     let toPrint = "";
  //     while (this.next === null) {
  //       toPrint += `${this.val} -> `;
  //     }
  //     return toPrint;
  //   }

  print() {
    if (this.isEmpty) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }
}

const linkedList = new LinkedList();
linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);
linkedList.print();
console.log(linkedList.get(1));
