"use strict";

var greenIcon = L.icon({
  iconUrl: './assets/img/fm.jpg',
  iconSize: [60, 120],
  // size of the icon
  iconAnchor: [22, 94],
  // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor

});
var map = L.map('map').setView([50.44721100347333, 30.53678043771229], 13);
L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([50.467886689667864, 30.612177556088092], {
  icon: greenIcon
}).addTo(map).bindPopup('Шарага(мій коледж)').openPopup();
L.marker([50.44721100347333, 30.53678043771229], {
  icon: greenIcon
}).addTo(map).bindPopup('Верховна Рада').openPopup();
L.marker([50.45911702569914, 30.51765256309699], {
  icon: greenIcon
}).addTo(map).bindPopup('Андріївська церква').openPopup();
L.marker([50.45896654175411, 30.525836008610348], {
  icon: greenIcon
}).addTo(map).bindPopup('Поштова площа').openPopup();
L.marker([50.465249467576996, 30.517144953056953], {
  icon: greenIcon
}).addTo(map).bindPopup('Контрактова площа').openPopup();
L.marker([50.41673138910913, 30.676322802787393], {
  icon: greenIcon
}).addTo(map).bindPopup('Парк Партизанської Слави').openPopup();