'use strict';
var $;
$(function() {
  var calc = (function() {
    var currentNumbers = '';
    var numbers = null;
    var operator = null;
    return {
      add: function(numbers, numbers2) {
        return numbers + numbers2;
      },
      subtract: function(numbers, numbers2) {
        return numbers - numbers2;
      },
      multiply: function(numbers, numbers2) {
        return numbers * numbers2;
      },
      divide: function(numbers, numbers2) {
        return numbers / numbers2;
      },
      digit: function(digit) {
        currentNumbers += digit;
        calc.display();
      },
      calculate: function() {
        var secondNumbers = Number(currentNumbers);
        var result = calc[operator](numbers, secondNumbers);
        numbers = result;
        return result;
      },
      equal: function() {
        if (operator) {
          var result = calc.calculate();
          calc.display(result);
          calc.reset();
        }
      },
      clear: function() {
        calc.reset();
        calc.numbers = null;
        calc.display('0');
      },
      plusMinus: function() {
        currentNumbers = Number(currentNumbers) * -1;
        calc.display(currentNumbers || '0');
      },
      squareRoot: function() {
        currentNumbers = Math.sqrt(Number(currentNumbers));
        calc.display(currentNumbers || '0');
      },
      decimal: function() {
        currentNumbers += '.';
        calc.display();
      },
      delete: function() {
        currentNumbers = currentNumbers.slice(0, currentNumbers.length - 1);
        calc.display();
      },
      storeNumbers: function() {
        if (currentNumbers) {
          numbers = Number(currentNumbers);
        }
        currentNumbers = '';
      },
      storeOperator: function(mathOperator) {
        if (numbers) {
          operator = mathOperator;
        }
      },
      display: function(result) {
        var displayNumber = result || Number(currentNumbers) || '0';
        $('#display').text(displayNumber);
      },
      reset: function() {
        currentNumbers = '';
        operator = null;
      }
    };
  })();
  var clickAudio = document.getElementById('clickAudio');
  $('.btn').on('click', function() {
    clickAudio.currentTime = 0;
    clickAudio.play();
  });
  $('.operator').on('click', function() {
    var operator = $(this).data('op');
    calc.storeNumbers();
    calc.storeOperator(operator);
  });
  $('.numbers').on('click', function() {
    var number = $(this).text();
    calc.digit(number);
  });
  $('.calc-op').on('click', function() {
    var op = $(this).data('op');
    calc[op]();
  });
  window.addEventListener('keypress', function(event) {
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
