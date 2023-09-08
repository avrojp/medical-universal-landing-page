$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $("#header").addClass("header-active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("#header").removeClass("header-active");
    }
  });
});
