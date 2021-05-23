$(document).ready(function() {
  const $slider = $(".slider");
  const $header = $(".header");
  const $burger = $(".header__burger");
  const $nav = $(".header__nav");
  const $body = $("body");
  const $headerLink = $(".header__link");
  const $arrow = $(".arrowUp");
  const $newSlider = $(".new-slider");

  $(".slider").slick({});

  const newSliderSettings = {
    slidesToShow: 2,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick",
      },

      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 300,
        settings: {
          centerMode: true,
          centerPadding: "px",
          slidesToShow: 1,
        },
      },
    ],
  };

  $(window).on("resize", function() {
    if ($(this).width() < 992 && !$newSlider.hasClass("slick-initialized")) {
      $newSlider.slick(newSliderSettings);
    }
  });

  $(".slick-arrow").html("");

  // $slider.fadeOut().fadeIn(3000);
  // $header.hide().show(2000);

  $(window).on(
    "scroll",
    $.debounce(0, function() {
      if ($(this).scrollTop() > 20) {
        $header.addClass("sticky");
        $arrow.addClass("active");
      } else {
        $header.removeClass("sticky");
        $arrow.removeClass("active");
      }
    })
  );

  $burger.on("click", function(event) {
    $burger.toggleClass("active");
    $nav.toggleClass("active");
    $body.toggleClass("fixed-page");
  });

  $headerLink.on("click", function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(target).offset().top - 75 }, 800);
    $nav.removeClass("active");
    $burger.removeClass("active");
    $body.removeClass("fixed-page");
  });

  $arrow.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  $(".open-dialog-btn").on("click", function() {
    $(".dialog").addClass("active");
    $body.toggleClass("fixed-page");
  });
  $(".dialog__overlay,.dialog__content").on("click", function() {
    $(".dialog").removeClass("active");
    $body.toggleClass("fixed-page");
  });
});
