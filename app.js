$(document).ready(function() {

  var $color = "white";
  var $colors = "red blue green yellow white";

  $("#red").click(function() {
    $color = "red";
  });
  $("#blue").click(function() {
    $color = "blue";
  });
  $("#green").click(function() {
    $color = "green";
  });
  $("#yellow").click(function() {
    $color = "yellow";
  });
  $("#white").click(function() {
    $color = "white";
  });
  $("#reset").click(function() {
    $(".box").removeClass($colors);
  });

  $(".box").click(function() {
    $(this).addClass($color);
  });
  $(".box").dblclick(function() {
    $(this).removeClass($color);
  });


});
