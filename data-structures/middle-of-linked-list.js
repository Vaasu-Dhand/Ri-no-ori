// Javascript program to illustrate how to find the middle
// element by counting the number of nodes

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function size(head) {
    let size = 0;
    let pointer = head
    while (pointer.next !== null) {
        size++
        pointer = pointer.next
    }
    return size + 1
}


// Function to find the middle element of the linked list
function getMiddle(head) {
    const middleIndex = Math.floor(size(head) / 2);
    console.log(middleIndex)
    let index = 0
    let prev = head
    let output
    // Traverse through the list and return the element on that index
    while (index !== middleIndex) {
        // console.log('Comes here', index, head.next)
        prev = prev.next
        output = head.next.data
        // console.log(output)
        index++
    }
    
    // Find the middle index
    // If size = 4. Middle  = 4/2 - 2
    // Need to calculate size of list
    return prev.data
  
}

function main() {

    // Create a hard-coded linked list:
    // 10 -> 20 -> 30 -> 40 -> 50 -> 60
    const head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    head.next.next.next.next = new Node(50);
    head.next.next.next.next.next = new Node(60);

    console.log(getMiddle(head));
}

main();