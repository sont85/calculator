'use strict';
define(['calc'], function(calc) {
  window.addEventListener('keypress', function(event) {
    var clickAudio = document.getElementById('clickAudio');
    clickAudio.currentTime = 0;
    clickAudio.play();
    var ascii = (event.which >= 96 && event.which <= 105) ? event.keyCode - 48 : event.keyCode; //change numpad keycode to regular num keycode
    if ((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)) { //number keys
      var number = String.fromCharCode(ascii);
      calc.digit(number);
    } else if (event.which === 46 || event.which === 110) { // decimal
      calc.decimal();
    } else if (event.which === 8) { //backspace
      calc.delete();
    } else if (event.which === 189) { //negative symbol
      calc.plusMinus();
    } else if (event.which === 107 || event.which === 43) { //plus sign
      calc.storeNumbers();
      calc.storeOperator('add');
    } else if (event.which === 109 || event.which === 45) { //subtract sign
      calc.storeNumbers();
      calc.storeOperator('subtract');
    } else if (event.which === 106 || event.which === 42) { //multiply sign
      calc.storeNumbers();
      calc.storeOperator('multiply');
    } else if (event.which === 111 || event.which === 47) { //divide sign
      calc.storeNumbers();
      calc.storeOperator('divide');
    } else if (event.which === 13 || event.which === 61) { //enter key
      event.preventDefault();
      calc.equal();
    }
  });
});
