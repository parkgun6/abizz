(function ($) {
  'use strict';

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Fixed Navbar
  $('.fixed-top').css('top', $('.top-bar').height());
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('.fixed-top').addClass('bg-dark').css('top', 0);
    } else {
      $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });

  // Header carousel
  $('.header-carousel').owlCarousel({
    autoplay: false,
    smartSpeed: 1500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Testimonials carousel
  $('.testimonial-carousel').owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  var swiper1 = new Swiper('.section3_swiper1', {
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1250: { slidesPerView: 6 },
      1050: { slidesPerView: 4.5 },
      700: { slidesPerView: 3 },
      450: { slidesPerView: 2 },
      0: { slidesPerView: 1.3 },
    },
  });
  var swiper2 = new Swiper('.section3_swiper2', {
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1250: { slidesPerView: 6 },
      1050: { slidesPerView: 4.5 },
      700: { slidesPerView: 3 },
      450: { slidesPerView: 2 },
      0: { slidesPerView: 1.3 },
    },
  });
  var swiper3 = new Swiper('.section3_swiper3', {
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1250: { slidesPerView: 6 },
      1050: { slidesPerView: 4.5 },
      700: { slidesPerView: 3 },
      450: { slidesPerView: 2 },
      0: { slidesPerView: 1.3 },
    },
  });
  var swiper4 = new Swiper('.section3_swiper4', {
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      1250: { slidesPerView: 6 },
      1050: { slidesPerView: 4.5 },
      700: { slidesPerView: 3 },
      450: { slidesPerView: 2 },
      0: { slidesPerView: 1.3 },
    },
  });

  document.querySelector('.personal-info-btn').addEventListener(
    'click',
    () => {
      const style = document.querySelector('.personal-info').style;
      if (style.display === 'none') {
        style.display = 'block';
      } else {
        style.display = 'none';
      }
    },
    false
  );
  emailjs.init({
    publicKey: 'oi6_AQO-qy-eeGrHg',
  });
  document.querySelector('.send-email').addEventListener(
    'click',
    () => {
      if (document.querySelector('#agreement').checked === true) {
        const templateParams = {
          from_email: document.querySelector('#email').value,
          title: document.querySelector('#title').value,
          content: document.querySelector('#message').value,
        };
        emailjs
          .send('service_ow36sc7', 'template_myv037g', templateParams)
          .then((res) => {
            alert('성공적으로 메일을 보냈습니다!');
            window.location.reload();
          });
      } else {
        alert('개인정보 수집 및 이용목적에 동의해주세요.');
      }
    },
    false
  );
})(jQuery);
