var readlineSync = require('readline-sync');
var methods = require('./random.js')



function main() {
  // var a = parseInt(readlineSync.question('a= '));
  // var b = parseInt(readlineSync.question('b= '));
  var a, b;
  var result = {};
  result = methods.random(a, b);

  console.log(result.a);

}

main();
