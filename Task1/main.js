var readlineSync = require('readline-sync');
var methods = require('./random.js')



function main() {

  var a;
  var result = {};
  result = methods.random(a);

  console.log(result.a);

}

main();
