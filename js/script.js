// 팝업창===========================================
$(function () {
  $(".popup").fadeIn();
  $("body").addClass("scroll_none");
});
$(".Yes").click(function () {
  $(".popup").fadeOut();
  $("body").removeClass("scroll_none");
});

document.querySelector(".No").addEventListener("click", function () {
  alert("19세 이상만 이용 가능합니다.");
});


// 이미지 확대=====================================
$(window).on('scroll', function () {
  $('.zoom-img').each(function () {
    let imgTop = $(this).offset().top;
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();

    if (scrollTop + windowHeight > imgTop + 100) {
      $(this).addClass('active');
    }
  });
});


// 과정 호버효과=======================================
$(function () {

  $(".process").mouseenter(function () {

    $(".process").removeClass("active");

    $(this).addClass("active");

  });

});

// 상품 스와이퍼========================================

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});