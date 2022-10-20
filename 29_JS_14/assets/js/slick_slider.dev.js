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
    dots: true,
    arrows: false
  });
});