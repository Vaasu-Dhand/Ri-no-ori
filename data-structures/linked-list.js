// tags: ['linked-list', 'medium']
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

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.getSize()) {
      console.error("No element exists at this index");
      return null;
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
    }

    length--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.size === 0) {
      return null;
    }
    // Remove first index
    // 1 -> 2 -> 3
    //     2 -> 3
    // First element to be removed
    if (this.head.value === value) {
      this.head = this.head.next;
    } else {
      // Middle or last element
      let pointer = this.head;
      while (pointer.value === value) {
        pointer = pointer.next;
      }
    }

    length--;
  }

  print() {
    if (this.isEmpty()) {
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
const l = new LinkedList();
console.log(l.isEmpty());
l.prepend(20);
l.print();
l.prepend(30);
l.append(10);
l.insert(0, 3);
l.print();
