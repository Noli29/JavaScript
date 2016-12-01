var readlineSync = require('readline-sync');
var methods = require('./random.js')



function main() {
  // var a = parseInt(readlineSync.question('a= '));
  // var b = parseInt(readlineSync.question('b= '));

  var result = {};
  result = methods.random(a, b);

  console.log('a: ', result.a);
  console.log('b: ', result.b);

}

main();
