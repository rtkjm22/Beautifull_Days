// ハンバーガーメニュー
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

// トップへ戻るボタン
function setFadeElement() {
  const windowH = $(window).height();
  const scroll = $(window).scrollTop();

  const contentsTop = Math.round($('.ly_blog').offset().top);
  const contentsH = $('.ly_blog').outerHeight(true);

  const contentsTop2 = Math.round($('.ly_footer').offset().top);
  const contentsH2 = $('.ly_footer').outerHeight(true);

  if (scroll + windowH >= contentsTop) {
    $('.bl_pageTop').addClass('UpMove');
    $('.bl_pageTop').removeClass('DownMove');
    $('.hide_btn').removeClass('hide_btn');
  } else {
    if (!$('.hide_btn').length) {
      $('.bl_pageTop').removeClass('UpMove');
      $('.bl_pageTop').addClass('DownMove');
    }
  }
}
$('.bl_pageTop').click(function () {
  $('body, html').animate({
    scrollTop: 0,

  }, 500);
  return false;
});

// slick
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

// アニメーションの起点を定義 
function fadeAnime() {
  $('.fadeInTrigger').each(function () {
    const elemPos = $(this).offset().top - 50;
    const scroll  = $(window).scrollTop();
    const windowH =  $(window).height();

    if (scroll >= elemPos - windowH) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });

  $('.zoomOutTrigger').each(function () {
    const elemPos = $(this).offset().top - 50;
    const scroll  = $(window).scrollTop();
    const windowH =  $(window).height();

    if (scroll >= elemPos - windowH) {
      $(this).addClass('zoomOut');
    } else {
      $(this).removeClass('zoomOut');
    }
  });
}

// スライドアニメーション
function slideAnime () {
  $('.leftAnime').each(function () {
    const elemPos = $(this).offset().top - 50;
    const scroll  = $(window).scrollTop();
    const windowH =  $(window).height();

    if (scroll >= elemPos - windowH) {
      $(this).addClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').addClass('slideAnimeRightLeft');
    } else {
      $(this).removeClass('slideAnimeLeftRight');
      $(this).children('.leftAnimeInner').removeClass('slideAnimeRightLeft');
    }
  });
  $('.rightAnime').each(function () {
    const elemPos = $(this).offset().top - 50;
    const scroll  = $(window).scrollTop();
    const windowH =  $(window).height();

    if (scroll >= elemPos - windowHeight) {
      //右から左へ表示するクラスを付与
      //テキスト要素を挟む親要素（右側）とテキスト要素を元位置でアニメーションをおこなう
      $(this).addClass("slideAnimeRightLeft"); //要素を右枠外にへ移動しCSSアニメーションで右から元の位置に移動
      $(this).children(".rightAnimeInner").addClass("slideAnimeLeftRight"); //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
    } else {
      //右から左へ表示するクラスを取り除く
      $(this).removeClass("slideAnimeRightLeft");
      $(this).children(".rightAnimeInner").removeClass("slideAnimeLeftRight");
    }
  })
}

// 背景画像が拡大する
$(window).scroll(function () {
  let scroll = $(window).scrollTop();
  $('.bl_header_img').css({
    transform: "scale(" + (100 + scroll / 10) / 100 + ")",
    top: -(scroll / 50) + "%",
  });
});

// glowAnimeにglowというクラス名を付ける
function GlowAnimeControl() {
  $(".glowAnime").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");
    } else {
      $(this).removeClass("glow");
    }
  });
}

// blurTriggerにblurというクラス名を付ける
function BlurTextanimeControl() {
  $(".blurTrigger").each(function () {
    let elemPos = $(this).offset().top - 50;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("blur");
    } else {
      $(this).removeClass("blur");
    }
  })
}

// スクロール時のアニメーション
$(window).scroll(function () {
  setFadeElement();
  fadeAnime();
  BlurTextanimeControl();
  slideAnime();
});

$(window).on('load', function () {

  $(".bl_splash_logo").delay(1200).fadeOut('slow');

  $(".bl_splash").delay(1500).fadeOut('slow', function () {
    $('body').addClass("appear");
    const element = $('.glowAnime');
    element.each(function () {
      const text = $(this).text();
      let textbox = "";
      text.split("").forEach(function(t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += `<span style="animation-delay:.${i}s;">${t}</span>`;
          } else {
            let n = i / 10;
            textbox += `<span style="animation-delay:${n}s;">${t}</span>`;
          }
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
    GlowAnimeControl();
  });

});


$('.bl_splashbgleft').on("animationend", function () {
  console.log('hoge');
  fadeAnime();
  setFadeElement();
  BlurTextanimeControl();
  slideAnime();
});