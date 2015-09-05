'use strict';
var $;
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
      console.log(currentNumbers);
    },
    calculate: function() {
      var secondNumbers = Number(currentNumbers);
      var result = calc[operator](numbers, secondNumbers);
      numbers = result;
      calc.display(result);
    },
    storeOperator: function(mathOperator) {
      console.log(mathOperator);
      operator = mathOperator;
    },
    storeNumbers : function(){
      numbers = Number(currentNumbers);
      currentNumbers = '';
    },
    display: function(result) {
      var displayNumber = result || currentNumbers;
      $('#display').text(displayNumber);
    }
  };
})();

$(function() {
  $('.operator').on('click', function() {
    var operator = $(this).data('op');
    calc.storeNumbers();
    calc.storeOperator(operator);
  });

  $('.numbers').on('click', function(){
    var number = $(this).text();
    calc.digit(number);
    calc.display();
  });
  $('#equalButton').on('click', function() {
    calc.calculate();
  });
});
