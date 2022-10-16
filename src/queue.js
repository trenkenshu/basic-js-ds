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

    getUnderlyingList() {
      return this.queue;
    }
  
    enqueue(value) {
      if(typeof this.queue === 'undefined') {
          this.queue = new ListNode(value);
      } else {
          let stop = false;
          let current = this.queue;
          for(let i = 0; !stop; i++ ) {
            if(current.next == null) {
                current.next = new ListNode(value);
                stop = true;
            } else {
                current = current.next;
            }
          }  
      }
      return this.queue;
    }
  
    dequeue() {
        let current = this.queue;
        let ans = current.value;
        this.queue = current.next;
        return ans;
    }
  }

module.exports = {
  Queue
};
