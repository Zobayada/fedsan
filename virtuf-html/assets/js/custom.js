(function($) {
  
  "use strict";

  // Preloader
  function stylePreloader() {
    $('body').addClass('preloader-deactive');
  }

  // Background Image
  $('[data-bg-img]').each(function() {
    $(this).css('background-image', 'url(' + $(this).data("bg-img") + ')');
  });
  // Background Color
  $('[data-bg-color]').each(function() {
    $(this).css('background-color', $(this).data("bg-color"));
  });

  // Off Canvas JS
  var canvasWrapper = $(".off-canvas-wrapper");
  $(".btn-menu").on('click', function() {
    canvasWrapper.addClass('active');
    $("body").addClass('fix');
  });

  $(".close-action > .btn-close, .off-canvas-overlay").on('click', function() {
    canvasWrapper.removeClass('active');
    $("body").removeClass('fix');
  });


  
  //Responsive Slicknav JS
  $('.main-menu').slicknav({
      appendTo: '.res-mobile-menu',
      closeOnClick: true,
      removeClasses: true,
      closedSymbol: '<i class="icon_plus"></i>',
      openedSymbol: '<i class="icon_minus-06"></i>'
  });

  // Tamino Martinius - All rights reserved

// Copyright © 2013 Tamino Martinius (http://zaku.eu)
// Copyright © 2013 Particleslider.com (http://particleslider.com

// Terms of usage: http://particleslider.com/legal/license

var init = function(){
  var isMobile = navigator.userAgent &&
    navigator.userAgent.toLowerCase().indexOf('mobile') >= 0;
  var isSmall = window.innerWidth < 1000;
  
  var ps = new ParticleSlider({
    ptlGap: isMobile || isSmall ? 3 : 0,
    ptlSize: isMobile || isSmall ? 3 : 1,
    width: 1e9,
    height: 1e9
  });
    
  var gui = new dat.GUI();
  gui.add(ps, 'ptlGap').min(0).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'ptlSize').min(1).max(5).step(1).onChange(function(){
    ps.init(true);
  });
  gui.add(ps, 'restless');
  gui.addColor(ps, 'color').onChange(function(value){
    ps.monochrome = true;
    ps.setColor(value);
	  ps.init(true);
  });
  
  
  (window.addEventListener
   ? window.addEventListener('click', function(){ps.init(true)}, false)
   : window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener
    ? psScript.addEventListener('load', init, false)
    : psScript.onload = init);
  psScript.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js';
	psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}
    
(window.addEventListener
  ? window.addEventListener('load', initParticleSlider, false)
  : window.onload = initParticleSlider);

  // carousel slide


  // Swipper Slider JS
  var homeSlider = new Swiper('.home-slider-container', {
    slidesPerView : 1,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.home-slider-container .swiper-button-next',
      prevEl: '.home-slider-container .swiper-button-prev',
    }
  });

  var teamSlider = new Swiper('.team-slider-container', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      1200:{
          slidesPerView : 3
      },

      992:{
          slidesPerView : 3
      },

      768:{
          slidesPerView : 2,
          centeredSlides: false

      },

      576:{
          slidesPerView : 1
      },

      0:{
          slidesPerView : 1
      }
    }
  });
  $(".team-slider-container").hover(function() {
      (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });

  var portfolioSlider = new Swiper('.portfolio-slider-container', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.portfolio-slider-container .swiper-button-next',
      prevEl: '.portfolio-slider-container .swiper-button-prev',
    },
    breakpoints: {
      1800:{
          slidesPerView: 'auto',
          spaceBetween : 50
      },
      1400:{
          slidesPerView: 3,
          slidesPerGroup : 1,
          spaceBetween : 30
      },
      1200:{
          slidesPerView : 3
      },

      992:{
          slidesPerView : 3
      },

      768:{
          slidesPerView : 2,
          centeredSlides: false

      },

      576:{
          slidesPerView : 1
      },

      0:{
          slidesPerView : 1
      }
    }
  });

  $(".portfolio-slider-container").hover(function() {
      (this).swiper.autoplay.stop();
  }, function() {
      (this).swiper.autoplay.start();
  });

  var testimonialSlider = new Swiper('.testimonial-slider-container', {
    slidesPerView : 1,
    loop: true,
    spaceBetween : 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: '.testimonial-slider-container .swiper-button-next',
      prevEl: '.testimonial-slider-container .swiper-button-prev',
    }
  });

  // Progress Bar JS
  var skillsBar = $(".progress-bar-line");
  skillsBar.appear(function() {
    skillsBar.each(function(index, elem) {
      var elementItem = $(elem),
      skillBarAmount = elementItem.data('percent');
      elementItem.animate({width: skillBarAmount}, 90);
      elementItem.closest('.progress-item').find('.percent').text(skillBarAmount);
      elementItem.closest('.progress-item').find('.progress-info').css('width', skillBarAmount);
    });
  });

  //Parallax Motion Animation 
  $('.scene').each(function () {
    new Parallax($(this)[0]);
  });

  // Isotope and data filter
  function isotopePortfolio() {
    var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      masonry: {
        columnWidth: 1
      }
    })
    // Isotope filter Menu
    $('.portfolio-filter-menu').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $gridMasonry.isotope({ filter: filterValue });
      $masonryGrid.isotope({ filter: filterValue });
      var filterMenuactive = $(".portfolio-filter-menu button");
      filterMenuactive.removeClass('active');
      $(this).addClass('active');
    });
  }
  
  //Video Popup
  $('.play-video-popup').fancybox();

  // Scroll Top Hide Show
  var varWindow = $(window);
  varWindow.on('scroll', function(){
    if ($(this).scrollTop() > 250) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }

    // Sticky Header
    if($('.sticky-header').length){
      var windowpos = $(this).scrollTop();
      if (windowpos >= 80) {
        $('.sticky-header').addClass('sticky');
      } else {
        $('.sticky-header').removeClass('sticky');
      }
    }
  });

  // Ajax Contact Form JS
  var form = $('#contact-form');
  var formMessages = $('.form-message');

  $(form).submit(function(e) {
    e.preventDefault();
    var formData = form.serialize();
    $.ajax({
      type: 'POST',
      url: form.attr('action'),
      data: formData
    }).done(function(response) {
      // Make sure that the formMessages div has the 'success' class.
      $(formMessages).removeClass('alert alert-danger');
      $(formMessages).addClass('alert alert-success fade show');

      // Set the message text.
      formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
      formMessages.append(response);

      // Clear the form.
      $('#contact-form input,#contact-form textarea').val('');
    }).fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger fade show');

      // Set the message text.
      if (data.responseText !== '') {
        formMessages.html("<button type='button' class='btn-close' data-bs-dismiss='alert'>&times;</button>");
        formMessages.append(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occurred and your message could not be sent.');
      }
    });
  });
  
  //Counter JS
  var counterId = $('.counter-animate');
  if (counterId.length) {
    counterId.counterUp({
      delay: 10,
      time: 1000
    });
  }

  //Tilt Animation
  $('.tilt-animation').tilt({
    base: window,
    reset: !0, 
    scale: 1.04, 
    reverse: !1, 
    max: 15, 
    perspective: 3e3, 
    speed: 4e3
  });

  //Scroll To Top
  $('.scroll-to-top').on('click', function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  // Reveal Footer JS
  let revealId = $(".reveal-footer"),
    footerHeight = revealId.outerHeight(),
    windowWidth = $(window).width(),
    windowHeight = $(window).outerHeight();

  if (windowWidth > 991 && windowHeight > footerHeight) {
    $(".site-wrapper-reveal").css({
      'margin-bottom': footerHeight + 'px'
    });
  }
  
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  varWindow.on('load', function() {
    AOS.init({
      once: true,
    });
    stylePreloader();
    isotopePortfolio();
  });
  

})(window.jQuery);