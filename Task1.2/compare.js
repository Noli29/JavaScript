var random = require('./random.js')

function compare(){
  var number1, number2;

  random = random(number1, number2);

  number1 = random.number1;
  number2 = random.number2;

  if (number1 > number2) {
    a = (number1 + ' ' + '>' + ' ' + number2);
  } else if (number1 == number2) {
    a = (number1 + ' ' + '=' + ' ' + number2);
  } else {
    a =  (number1 + ' ' + '<' + ' ' + number2);
  }


  return{
    a: a
  }
}

module.exports.compare = compare;
