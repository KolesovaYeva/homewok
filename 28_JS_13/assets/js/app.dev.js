"use strict";

fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=758ea06ac9d64e54ddf5bc906e4c227f').then(function (resp) {
  return resp.json();
}).then(function (data) {
  console.log(data);
  document.querySelector('.package-name').textContent = data.name;
  document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
  document.querySelector('.clouds').textContent = data.weather[0]['description'];
  document.querySelector('.features li').innerHTML = "<svg data-v-3e6e9f12=\"\" width=\"50px\" height=\"50px\" viewBox=\"0 0 148 148\" class=\"owm-weather-icon\"><path d=\"M65.03 60.514c.642 0 1.27.057 1.889.143a15.476 15.476 0 01-.344-3.23c0-8.524 6.91-15.437 15.435-15.437 8.294 0 15.042 6.547 15.402 14.752a9.224 9.224 0 016.208-2.404 9.263 9.263 0 019.263 9.263 9.165 9.165 0 01-.619 3.305c.7-.14 1.423-.218 2.161-.218 5.97 0 10.806 4.839 10.806 10.805 0 5.97-4.836 10.806-10.806 10.806H65.031c-7.674 0-13.893-6.219-13.893-13.893 0-7.671 6.219-13.892 13.893-13.892\" fill=\"#3b3c40\"></path><path d=\"M39.25 73.05c.76 0 1.505.07 2.24.17a18.296 18.296 0 01-.41-3.834c0-10.114 8.2-18.31 18.312-18.31 9.84 0 17.843 7.766 18.27 17.5a10.935 10.935 0 017.366-2.853c6.068 0 10.987 4.922 10.987 10.99 0 1.382-.267 2.7-.732 3.918a12.868 12.868 0 012.564-.256c7.078 0 12.818 5.739 12.818 12.818 0 7.078-5.74 12.817-12.818 12.817H39.25c-9.103 0-16.48-7.378-16.48-16.48 0-9.103 7.377-16.48 16.48-16.48\" fill=\"#efefed\"></path>".concat(data.weather[0]['icon'], "</svg>");
  document.querySelector('.max_temp').textContent = data.main.temp_max;
  document.querySelector('.min_temp').textContent = data.main.temp_min;
  document.querySelector('.feels_like_temperature').textContent = data.main.feels_like;
  document.querySelector('.pressure').textContent = data.main.pressure;
  document.querySelector('.humidity_meaning').textContent = data.main.humidity;
  document.querySelector('.sinrise_meaning').textContent = data.sys.sunrise.toFixed(2);
  document.querySelector('.sunset_meaning').textContent = data.sys.sunset.toFixed(2);
  document.querySelector('.visibility_meaning').textContent = data.visibility;
  document.querySelector('.wind_speed_meaning').textContent = data.wind.speed;
})["catch"](function () {});