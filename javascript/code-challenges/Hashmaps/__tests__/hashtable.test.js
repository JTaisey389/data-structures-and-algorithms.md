'use strict';

const Hashmap = require('../hashtable.js');

const hashmap = new Hashmap(5);

hashmap.set('ice', 'pina colada mix');
hashmap.set('ice', 'two');

// hashmap.set('tequila', 'coconut shavings');
// hashmap.set('shake it all up', 'drink it all up');

describe('------Testing Hash Tables-----', () => {

  it('should add a key/value pair to the hashtable', () => {
    expect(hashmap.contains('ice')).toEqual(true);
    console.log('ice ---> ', 'pina colada mix');
  });
  it('should return the value store based on a key', () => {
    expect(hashmap.get('ice').head.next.value).toEqual(['ice', 'pina colada mix']);
    console.log('ice ---> ', 'pina colada mix --->', 'shake it all up :P');
  });
  it('should return null or undefined for a key that does not exist in the hashtable', () => {
    expect(hashmap.get('Jameson')).toEqual(undefined);
    console.log('ice ---> ', 'pina colada mix --->', 'shake it all up :P', 'tequila --->');
  });
  it('should handle a collision within the hashtable', () => {
    expect(hashmap.get('ice')).toEqual({'head': {'next': {'next': null, 'value': ['ice', 'pina colada mix']}, 'value': ['ice', 'two']}});
    console.log('ice ---> ', 'pina colada mix --->', 'shake it all up :P', 'tequila --->', 'shake it alllllll up --->');
  });
  it('should retrieve a value from a bucket within a collision within the hashtable', () => {
    expect(hashmap.get('ice').head.next.value).toEqual(['ice', 'pina colada mix']);
    console.log('ice ---> ', 'pina colada mix --->', 'shake it all up :P', 'tequila --->', 'shake it alllllll up --->', 'mmmmm coconut shavings --->');
  });
  it('should hash a key to values in the range of the hashmap', () => {
    expect(hashmap.hash('TEQUILA')).toEqual(2);
    console.log('ice', 'pina colada mix');
    console.log('ice', 'two');
    console.log('tequila', 'coconut shavings');
    console.log('shake it all up', 'drink it all up');
  });
});




