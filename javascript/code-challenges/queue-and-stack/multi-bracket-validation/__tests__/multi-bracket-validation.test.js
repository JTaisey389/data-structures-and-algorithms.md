'use strict';
let multiBracketValidation = require('../multi-bracket-validation');

describe(multiBracketValidation, () => {
  it('should return true for a simple balanced brackets', () => {
    expect(multiBracketValidation('()')).toEqual(true);
  });
  it('should return true for a multiple balanced brackets', () => {
    expect(multiBracketValidation('()[]{}')).toEqual(true);
  });
  it('should return true for brackets that are nested', () => {
    expect(multiBracketValidation('[{()}]')).toEqual(true);
  });
  it('should return true for complex brackets', () => {
    expect(multiBracketValidation('({})([])[()][{}]{[]}{()}')).toEqual(true);
  });
  it('should return true strings that contain ballanced brackets and non-bracket charecters', () => {
    expect(multiBracketValidation('([i]z)')).toEqual(true);
  });
  it('should return false for simple unballanced brackets', () => {
    expect(multiBracketValidation('[')).toEqual(false);
  });
  it('should return false for complex unbalanced brackets', () => {
    expect(multiBracketValidation('({})([})[()}[{}]{()]}{()}')).toEqual(false);
  });
  it('should return false for brackets that are unballanced', () => {
    expect(multiBracketValidation('[{]')).toEqual(false);
  });
  it('should return false for matched brackets that are unballanced', () => {
    expect(multiBracketValidation('([})([]){()}')).toEqual(false);
  });
  it('should return false for extra closing brackets', () => {
    expect(multiBracketValidation('[]}')).toEqual(false);
  });
});
