function random(){
  var min = 10;
  var max = 100;
  number1 = Math.floor(Math.random() * (max - min) + min);
  number2 = Math.floor(Math.random() * (max - min) + min);


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

module.exports.random = random;
