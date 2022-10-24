/**
 * Linked list adalah struktur data yang masih berbasis array, 
 * namun setiap item di dalam array terhubung satu dengan yang lainnya.
 * Di beberapa bahasa pemrograman, terutama bahasa pemrograman yang 
 * sifatnya fungsional, linkedlist ini adalah struktur data defaultnya.
 * 
 * Secara performa linkedlist lebih baik daripada array,
 * karena program ini tidak perlu memmbooking tempat di memori yang bersebelahan,
 * bisa di tempat yang kosong saja(random). Namun kita menambahkan informasi 
 * agar masing-masing alamat dari array di adress memori tersebut saling terhubung. 
 * 
 * Analogi yang tepat mungkin bisa kita andai-andai kan tulis ini dengan 
 * gerbong kereta yang saling terkoneksi satu dengan yang lainnya. 
 * Jadi ketika kita menggunakan array biasa bukan linked list 
 * maka sebuah program akan membuka tempat di memori yang kosong.
 * 
 * Katakanlah kita ingin punya 4 item di array, maka dia akan membooking 
 * empat tempat yang kosong yang berurutan karena indeksnya harus berurutan 
 * dari 0 sampai 3. Hal ini bisa saja mengakibatkan memori jadi tidak efisien 
 * karena harus mencari jumlah alokasi memori yang berdekatan.
 * Maka menjadi tidak efisien jika pada program yang kita buat 
 * arraynya berisi value yang sangat besar.
 * 
 * Sedangkan linked list memiliki addres, value, dan next addresnya. 
 * Dengan demikian linked list tidak perlu berada di suatu Kavling atau Kompleks Perumahan, 
 * Tapi dia bisa tersebar di seluruh memori-memori asal ada memori yang kosong, 
 * dia bisa taruh di sana, kemudian tambahkan informasi untuk next dan seterusnya 
 * sehingga lebih efisien juga secara memori manajemennya.
 */

function createNode(value) {
  return {
    value: value,
    next: null
  }
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: null,

    push: function(value) {
      const node = createNode(value);
      // jika linkedlistnya kosong
      if (this.head === null) {
        this.head = node;
        this.tail = node;
        this.length += 1;
        return node;
      } else { //jika linkedlistnya tidak kosong
        this.tail.next = node;
        this.tail = node;
        this.length += 1;
        return node;
      }
    },
    pop: function() {
      // jika linkedlist kosong
      if (this.isEmpty()) {
        return null;
      }
      const node = this.tail;
      // jika satu node
      if(this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return node;
      }
      // jika lebih dari satu node
      let current = this.head;
      let penult;
      while(current) {
        if(current.next === this.tail) {
          penult = current;
          break;
        }
        current = current.next;
      }
      penult.next = null;
      this.tail = penult;
      this.length -= 1;

      return node;
    },
    get: function(index) {
      // list kosong
      if (index < 0 || index > this.length) {
        return nulll;
      }
      // list itemnya hanya ada satu
      if (index === 0) {
        return this.head;
      }
      // list item lebih dari satu
      let current = this.head;
      let i = 0;
      while(i < index) {
        current = current.next;
        i += 1;
      }
      return current;
    }, 

    delete: function(index) {
      // list kosong
      if (index < 0 || index > this.length) {
        return nulll;
      }      
      // list berisi satu item
      if(index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length -=1;
        return deleted;
      }
      // list dengan item lebih dari satu   
      let current = this.head;
      let prev;
      let i = 0;
      while (i < index) {
        prev = current;
        current = current.next;
        i += 1;        
      }
      const deleted = current;
      prev.next = current.next;
      // console.log(current);
      return deleted;

    },
    isEmpty: function() {
      return this.length === 0;
    },
    print: function() {
      const values = [];
      let current = this.head;
      while(current) {
        values.push(current.value);
        current = current.next;
      }
      return values.join(' => ')
    }
  }
}

const list = createLinkedList();
const values = ['a', 'b', 'c', 'd'];
const nodes = values.map(function(val) {
  list.push(val);
});

//console.log(list.isEmpty()); // false
list.pop(); // ['a', 'b', 'c']
//console.log(list.tail.value); // c

//console.log(list.get(1));
console.log(list.delete(1));
console.log(list.print());