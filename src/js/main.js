//ハンバーガーメニュー
$('.bl_openbtn').click(function () {
  $(this).toggleClass('bl_openbtn__active');
  $('.ly_gnav').toggleClass('ly_gnav__active');
  $('.ly_header,.ly_container,ly_footer').toggleClass('hp_mainBlur');
});
$('.ly_gnav a').click(function () {
  $('.bl_openbtn').removeClass('bl_openbtn__active');
  $('.ly_gnav').removeClass('ly_gnav__active');
  $('.ly_header,.ly_container,ly_footer').removeClass('hp_mainBlur');
});

//slick
$('.slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<div class="slick-prev"></div>',
  nextArrow: '<div class="slick-next"></div>',
  dots: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 796,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 426,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]
});

//背景画像が拡大する
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $('.bl_header_img').css({
    transform: "scale(" + (100 + scroll / 10) / 100 + ")",
    top: -(scroll / 50) + "%",
  });
});

$(window).on('load', function () {

  $(".bl_splash_logo").delay(1200).fadeOut('slow', function () {});

  $('.bl_splash').delay(1500).fadeOut('slow', function () {
    $('body').addClass("appear");
  });

});