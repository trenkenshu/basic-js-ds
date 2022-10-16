const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

//const { ListNode } = require(../extensions/list-node.js);


function removeKFromList( l, k ) {
    let head = l;
    let current = head;
    let previous = null;
    let stop = false;
    
    for( let i = 0; !stop /*&& current.next !== null*/; i++) {
        
        if( current.value === k && current === head) {
                head = current.next;
                current = current.next;
        } else if( current.value === k && current !== head ) {
                previous.next = current.next;
                if(current.next === null ) {
                    stop = true;
                } else {
                    current = current.next;
                }
                //current = current.next;

        } else {
                previous = current;
                //current = current.next;
                if(current.next === null ) {
                    stop = true;
                } else {
                    current = current.next;
                }
        }
        
        
    }; 
    
    return head;
  }

module.exports = {
  removeKFromList
};
