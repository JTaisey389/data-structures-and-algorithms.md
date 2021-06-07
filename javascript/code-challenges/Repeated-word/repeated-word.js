'use strict';
const hash = require('../Hashmaps/hash-tables/hashtable.js');

const testOne = 'Once upon a time, there was a brave princess who...';
const testTwo = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
const testThree = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

const repeatedWords = (string) => {
  const table = new hash.Hashmap(1024);
  const words = string.match(/((\b[^\s]+\b)((?<=\.\w).)?)/g); // Dan is awesome he realized you have to not include specific characters like !, ., and etc. 
  
  for (var i = 0; i < array.length; i++){
    let key = words[i].toLowerCase();

    if (table.contains(key)){
      return table.get(key);
    }
  }
  table.add(key,key);

  // let hash = {};// hash is an empty brackets with no values
  // let stringItems = string.replace(/,/g, '').trim(); // the strings items are replaced and trimmed
  // let array = stringItems.split(''); // now we have the stringItems split into individual strings
  // for (var i = 0; i < array.length; i++){ // for each index that is less than the array.length we increment the for loop
  //   if (hash[array[i]] || hash[array[i]] === 0) { // if the created hash tables array with value of I or the hash table array is strict equal to 0
  //     return array[i]; // return the arrays value at the index
  //   }
  //   hash[array[i].toLowerCase()] = i; // change all the case to lowercase to not throw off the for loop
  // }
  // return null;
};

module.exports = repeatedWords;
