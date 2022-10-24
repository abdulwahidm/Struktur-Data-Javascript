function createQueue() {
  const array = [];

  return {
    enqueue: function(value) {
      array.unshift(value);
    },
    dequeue: function() {
      array.pop()
    },
    peek: function() {
      return array[array.length - 1];
    }
  }
}


const todos = createQueue();
todos.enqueue('wakeup');
todos.enqueue('bath');
todos.enqueue('pray');
todos.enqueue('learn');

todos.dequeue();
todos.dequeue();
todos.dequeue();
console.log(todos.peek());
