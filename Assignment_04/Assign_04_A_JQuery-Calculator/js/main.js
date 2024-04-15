// main.js
$(document).ready(function(){

  var x, y, total;

  $("#addition").on("click", function(){
      x = parseFloat($(".input1").val());
      y = parseFloat($(".input2").val());
      total = x + y;
      $(".answer").html(total);
      $(".input1, .input2").val("");
  });

  $("#subtraction").on("click", function(){
      x = parseFloat($(".input1").val());
      y = parseFloat($(".input2").val());
      total = x - y;
      $(".answer").html(total);
      $(".input1, .input2").val("");
  });

  $("#multiplication").on("click", function(){
      x = parseFloat($(".input1").val());
      y = parseFloat($(".input2").val());
      total = x * y;
      $(".answer").html(total);
      $(".input1, .input2").val("");
  });

  $("#division").on("click", function(){
      x = parseFloat($(".input1").val());
      y = parseFloat($(".input2").val());
      if (y !== 0) {
          total = x / y;
      } else {
          total = "Undefined";
      }
      $(".answer").html(total);
      $(".input1, .input2").val("");
  });

});
