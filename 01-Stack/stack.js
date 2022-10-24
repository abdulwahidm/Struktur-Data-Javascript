/**
 * Secara default jasvascript menggunakan stack sebagai internal languagenya.
 * stack cukup sederhana menyerupai array, hanya dengan beberapa limitasi.
 * Konsep stack adalah Last In First Out (LIFO). Ilustrasinya seperti tumpukan piring.
 */

function createStack() {
  const array = [];

  return {
    push: function(item) {
      array.push(item);
    },
    pop: function() {
      array.pop();
    }, 
    peek: function() {
      return array[array.length - 1];
    },
    size: function() {
      return array.length;
    }
  }
}

const bookStack = createStack();
bookStack.push('The Effective Engineer');
bookStack.push('The Pragmatic Programmer');
bookStack.push('Start With Why');

console.log(bookStack.peek());

bookStack.pop();
bookStack.pop();

console.log(bookStack.peek());