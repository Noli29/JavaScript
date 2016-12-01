var readlineSync = require('readline-sync');
var methods = require('./random.js')
var methods = require('./compare.js')



function main() {

  var a;
  var result = {};
  result = methods.compare(a);

  console.log(result.a);

}

main();
