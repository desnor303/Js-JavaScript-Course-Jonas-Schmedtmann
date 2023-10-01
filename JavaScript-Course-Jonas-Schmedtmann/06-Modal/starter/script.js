'use strict';

let test2 = () => {
  let localVariable = 'local';
  var testlocal1 = 'var1';
  testlocal1;
};
test2();
console.log(testlocal1);
