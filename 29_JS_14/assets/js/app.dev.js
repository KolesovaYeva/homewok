"use strict";

$(document).ready(function () {
  $('#hamburger').click(function () {
    $('#side_menu').toggleClass('open');
    $('#hamburger').toggleClass('is-active');
    $('#navBlock').appendTo('#side_menu');
  });
});
var icon = L.icon({
  iconUrl: './assets/img/Pin.svg',
  iconSize: [60, 120],
  // size of the icon
  iconAnchor: [22, 94],
  // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

});
var map = L.map('map').setView([40.68503658310214, -73.92312421138685], 14);
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([40.68503658310214, -73.92312421138685], {
  icon: icon
}).addTo(map).openPopup();