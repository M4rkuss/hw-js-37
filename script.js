$("nav").mouseover(function () {
  $(this).css("width", "220");
  $(this).css("cursor", "pointer");
  $("p").css("display", "block");
  $("ul").css("align-items", "flex-start");
});

$("nav").bind('mouseout', function () {
  $(this).css("width", "100px");
  $("ul").css("align-items", "center");
  $("p").css("display", "none");
})