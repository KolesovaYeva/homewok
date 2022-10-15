"use strict";

if (document.documentElement.clientWidth < 769) {
  $('#navBlock').appendTo('#side_menu');
  var footerNavigation = document.getElementById('footerNavigation');
  footerNavigation.classList.remove('flex-row');
}

$(document).ready(function () {
  $('#hamburger').click(function () {
    $('#side_menu').toggleClass('open');
    $('#hamburger').toggleClass('is-active');
    $('#navBlock').appendTo('#side_menu');
  });
});