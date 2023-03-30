class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
}

const l1 = new LinkedList();
l1.insertFirst(3);
l1.insertFirst(4);
l1.insertFirst(2);

const l2 = new LinkedList();
l2.insertFirst(4);
l2.insertFirst(6);
l2.insertFirst(5);

console.log(l2);
