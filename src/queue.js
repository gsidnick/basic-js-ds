const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue === null) {
      this.queue = new ListNode(value);
    } else {
      this._enqueue(this.queue, value);
    }
  }

  _enqueue(element, value) {
    if (element.next === null) {
      element.next = new ListNode(value);
    } else {
      this._enqueue(element.next, value);
    }
  }

  dequeue() {
    const value = this.queue.value;
    if (this.queue.next === null) {
      this.queue = null;
    } else {
      this.queue.value = this.queue.next.value;
      this.queue = this.queue.next;
    }
    return value;
  }
}

module.exports = {
  Queue
};
