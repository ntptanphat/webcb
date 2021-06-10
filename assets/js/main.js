$(document).ready(function () {
  var $scrollup = $(".scrollup");

  $scrollup.on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
