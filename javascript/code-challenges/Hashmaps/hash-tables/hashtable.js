class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list exist';

    let current = this.head;

    while(current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class Hashmap {
  // Hashmaps need:
  // - a predetermined storage mechanism size
  // - which means we also need some type of storage mechanism -> array
  // - a constructor that creates a new mechanism when we make a new hashmap
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  set(key, value) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LinkedList();
      ll.add([key, value]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, value]);
    }
  }

  get(key) {
    let hash = this.hash(key);
    return this.storage[hash];
  }

  contains(key) {
    let hash = this.hash(key);

    if (this.storage[hash] === undefined) {
      return false;
    } else {
      let node = this.storage[hash];
      let current = node.head;
      while (current) {
        if (current.value[0] === key) {
          return true;
        }
      }
    }
  }

}

module.exports = Hashmap;
let hashmap = new Hashmap (5800);

hashmap.set('ice', 'pina colada mix');
hashmap.set('tequila', 'coconut shavings');
hashmap.set('shake it all up', 'drink it all up');
hashmap.set('jameson', 'buthead');
hashmap.set('harley', 'bevis');

