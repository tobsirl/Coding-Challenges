// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }

  print() {
    return this.data;
  }
}

const queue = new Queue();

queue.add('1');
queue.add('2');
queue.add('3');
queue.add('4');
queue.add('5');

queue.print(); //?

module.exports = Queue;
