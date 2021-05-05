'use strict';

const multiBracketValidation = (input) => {
  let brackets = '[]{}()';
  let sortingStack = [];
  for(let bracket of input){
    let presortedBrackets = brackets.indexOf(bracket);
    if (presortedBrackets === -1){
      continue
    }
    if(presortedBrackets % 2 === 0){
      sortingStack.push(presortedBrackets +1);
    } else {
      if(sortingStack.length === 0 || sortingStack.pop() !== presortedBrackets){
        return false;
      }
    }
  }
  return sortingStack.length === 0;
};

module.exports = multiBracketValidation;
