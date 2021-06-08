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
    expect(leftJoin(hashOne, hashTwo)).toEqual([
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['guide', 'usher', 'follow'],
      ['fond', 'enamored', 'averse'],
      ['outfit', 'garb', null]
    ]
    );
  });
  // it('should successfully return data structure with two values for each key if the same table is passed twice', () => {

  //   expect(leftJoin(hashOne, hashOne)).toEqual([
  //     ['wrath', 'anger', 'anger'],
  //     ['diligent', 'employed', 'employed'],
  //     ['guide', 'usher', 'usher'],
  //     ['fond', 'enamored', 'enamored'],
  //     ['outfit', 'garb', 'garb'],
  //   ]);
  // });

  // it('should successfully return data structure with null as third element in every array for two tables with no matching keys', () => {
  //   // console.log(leftJoin(hashOne, hashThree));

  //   expect(leftJoin(hashOne, hashThree)).toEqual([
  //     ['wrath', 'anger', null],
  //     ['diligent', 'employed', null],
  //     ['guide', 'usher', null],
  //     ['fond', 'enamored', null],
  //     ['outfit', 'garb', null],
  //   ]);
  // });
});
