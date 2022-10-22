"use strict";

$(function () {
  $('.hero_wrapper').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1400,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  });
});
$(function () {
  $('.news_slider_wrapper').slick({
    lazyLoad: 'ondemand',
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1400,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><span class="icon-uniE901 arrow-icon"></span></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><span class="icon-uniE901 arrow-icon"></span></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }]
  });
});