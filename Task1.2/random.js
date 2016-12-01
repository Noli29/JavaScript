function random(){
  var min = 10;
  var max = 100;
  number1 = Math.floor(Math.random() * (max - min) + min);
  number2 = Math.floor(Math.random() * (max - min) + min);
  return{
    number1: number1,
    number2: number2,
  }
}

module.exports = random;
