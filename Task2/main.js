var readlineSync = require('readline-sync');
var methods = require('./serial.js')



function main() {

  //var a = parseInt(readlineSync.question(' '));
var a;
  var result = {};
  result = methods.search(a);

  console.log(result.a);

}

main();
