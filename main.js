'use strict';
var $;
require(['calc', 'keyinput'], function(calc) {
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
});
