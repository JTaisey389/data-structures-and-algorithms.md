'use strict';

function leftJoin(hashMap1, hashMap2) {
  let firstArray = [];
  for(var i = 0; i < hashMap1.buckets.length; i++){
    let secondArray = [];
    if (hashMap1.buckets[i] !== undefined) {
      // console.log(hashMap1.buckets[i]);
      let key = (Object.keys(hashMap1.buckets[i].head.value)[0]);
      secondArray.push(key);
      secondArray.push(hashMap1.buckets[i].head.value[key]);
      if (hashMap2.contains(key)) {
        secondArray.push(hashMap2.get(key));
      } else {
        secondArray.push(null);
      }
      firstArray.push(secondArray);
    }
  }
  return firstArray;
}

module.exports = leftJoin;
