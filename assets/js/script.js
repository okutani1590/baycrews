function fadeAnime() {
  $(".fadeUpTrigger").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeUp");
    }
  });

  $(".fadeInTrigger").each(function () {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("fadeIn");
    }
  });

  $(".popupTrigger").each(function () {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("popup");
    }
  });
}

$(window).scroll(function () {
  fadeAnime();
});

$(window).on("load", function () {
  fadeAnime();
});

// スムーススクロール

$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = -100;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// スライド
$(function () {
  const swiper = new Swiper(".swiper", {
    loop: true, // ループ
    effect: "fade", // フェードイン切り替え
    speed: 1000, // スライド切り替えのアニメーション速度（ミリ秒）
    autoplay: {
      delay: 3000, // 3秒ごとに切り替え
      disableOnInteraction: false, // ユーザー操作後も自動再生を続ける
    },
  });
});

// 下記にjsを記述
