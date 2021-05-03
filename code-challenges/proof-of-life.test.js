'use strict';

function isAlive() {
  return true;
}


xdescribe('proof of life', () => {

  it('lives', () => {

    expect(isAlive()).toBeTruthy();

  });

});

