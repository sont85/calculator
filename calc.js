'use strict';
define(function() {
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
        document.getElementById('display').textContent = displayNumber;
      },
      reset: function() {
        currentNumbers = '';
        operator = null;
      }
    };
  })();
  return calc;
});
