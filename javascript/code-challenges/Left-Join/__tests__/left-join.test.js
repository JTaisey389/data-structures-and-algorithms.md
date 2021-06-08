'use strict';

// const hash = require('../../Hashmaps/hashtable.js');
const HashMap = require('../../Hashmaps/hashtable.js');
const leftJoin = require ('../left-join.js');

// typeError new hashmap is not a constructor. This code works and I know it does, but this constructor thing is ridiculous
// const hashOne = new hash.HashMap(4000);
// const hashTwo = new hash.HashMap(4000);
// const hashThree = new hash.HashMap(4000);
const hashOne = new HashMap(4000);
const hashTwo = new HashMap(4000);
const hashThree = new HashMap(4000);

hashOne.add('fond', 'enamored');
hashOne.add('wrath', 'anger');
hashOne.add('diligent', 'employed');
hashOne.add('outfit', 'garb');
hashOne.add('guide', 'usher');

hashTwo.add('fond', 'averse');
hashTwo.add('wrath', 'delight');
hashTwo.add('diligent', 'idle');
hashTwo.add('guide', 'follow');
hashTwo.add('flow', 'jam');

hashThree.add('apple', 'averse');
hashThree.add('orange', 'delight');
hashThree.add('banana', 'idle');
hashThree.add('grapes', 'follow');
hashThree.add('pear', 'jam');

describe('test for LeftJoin function', () => {
  it('should successfully join to hashmaps into a single hashmap with both sets of values', () => {
    expect(leftJoin(hashOne, hashTwo)).toContainEqual(['fond', 'enamored', 'averse']);
    expect(leftJoin(hashOne, hashTwo)).toContainEqual(['wrath', 'anger', 'delight']);
    expect(leftJoin(hashOne, hashTwo)).toContainEqual(['diligent', 'employed', 'idle']);
    expect(leftJoin(hashOne, hashTwo)).toContainEqual(['outfit', 'garb', null]);
    expect(leftJoin(hashOne, hashTwo)).toContainEqual(['guide', 'usher', 'follow']);
  });
  it('should successfully return data structure with null as third element in every array for two tables with no matching keys', () => {
    // console.log(leftJoin(hashOne, hashThree));

    expect(leftJoin(hashOne, hashThree)).toContainEqual(['wrath', 'anger', null]);
    expect(leftJoin(hashOne, hashThree)).toContainEqual(['diligent', 'employed', null]);
    expect(leftJoin(hashOne, hashThree)).toContainEqual(['guide', 'usher', null]);
    expect(leftJoin(hashOne, hashThree)).toContainEqual(['fond', 'enamored', null]);
    expect(leftJoin(hashOne, hashThree)).toContainEqual(['outfit', 'garb', null]);
  });
});
