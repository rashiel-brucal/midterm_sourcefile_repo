'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  // Create an empty array to store stack elements.
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element.
  pop() {
    return this.items.pop();
  }

  // Return the top element without removing it.
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements in the stack.
  size() {
    return this.items.length;
  }

  // Convert the stack elements into text.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions onto the stack.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the current top action.
console.log('Top Action:', actionHistory.peek());

// Undo the most recent action.
console.log('Undo Action:', actionHistory.pop());

// Display the remaining actions and stack size.
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());


// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  // Create an empty array to store queue elements.
  constructor() {
    this.items = [];
  }

  // Add an element to the back of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the first element.
  dequeue() {
    return this.items.shift();
  }

  // Return the first element without removing it.
  front() {
    return this.items[0];
  }

  // Check if the queue has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements in the queue.
  size() {
    return this.items.length;
  }

  // Convert the queue elements into text.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Add the four support requests in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the request at the front.
console.log('Next Request:', waitingRequests.front());

// Process the first two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining requests and queue size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());


// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  // Create an empty array to store priority queue items.
  constructor() {
    this.items = [];
  }

  // Insert a request according to its priority.
  // Smaller priority numbers are placed before larger numbers.
  // Equal priorities keep their original arrival order.
  enqueue(request, priority) {
    const item = {
      request: request,
      priority: priority
    };

    let inserted = false;

    // Find the correct position for the new item.
    for (let i = 0; i < this.items.length; i++) {
      if (priority < this.items[i].priority) {
        this.items.splice(i, 0, item);
        inserted = true;
        break;
      }
    }

    // If no higher-priority position was found, add it at the end.
    if (!inserted) {
      this.items.push(item);
    }
  }

  // Remove and return the highest-priority request.
  dequeue() {
    return this.items.shift();
  }

  // Return the number of items in the priority queue.
  size() {
    return this.items.length;
  }

  // Display every request and its priority.
  print() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(
        this.items[i].request + ', Priority ' + this.items[i].priority
      );
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Add the requests in the required arrival order.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Display the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request.
const processedPriorityRequest = urgentRequests.dequeue();

console.log(
  'Processed Priority Request:',
  processedPriorityRequest.request +
    ', Priority ' +
    processedPriorityRequest.priority
);

// Display the remaining priority requests.
console.log('Remaining Priority Requests:');
urgentRequests.print();


// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  // Create a node containing an element and a reference to the next node.
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  // Create an empty linked list.
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // Add a new node at the end of the linked list.
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  // Insert a new node at the specified position.
  insert(position, element) {
    // Reject positions outside the valid range.
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    // Insert at the beginning of the list.
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;

      // Move to the node before the insertion position.
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }

      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  // Remove and return the element at the specified position.
  removeAt(position) {
    // Reject invalid positions.
    if (position < 0 || position >= this.length) {
      return undefined;
    }

    let current = this.head;

    // Remove the first node.
    if (position === 0) {
      this.head = current.next;
    } else {
      let previous = this.head;

      // Move to the node before the one being removed.
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }

      current = previous.next;
      previous.next = current.next;
    }

    this.length--;
    return current.element;
  }

  // Find and return the position of an element.
  indexOf(element) {
    let current = this.head;
    let index = 0;

    // Traverse the linked list from the head.
    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Remove an element by finding its position first.
  remove(element) {
    const index = this.indexOf(element);

    if (index !== -1) {
      return this.removeAt(index);
    }

    return undefined;
  }

  // Check if the linked list is empty.
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes in the linked list.
  size() {
    return this.length;
  }