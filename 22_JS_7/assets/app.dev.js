"use strict";

var playList = [{
  author: "LED ZEPPELIN -",
  song: " STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN -",
  song: " BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD -",
  song: " FREE BIRD"
}, {
  author: "DEEP PURPLE -",
  song: " SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX -",
  song: " ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC -",
  song: " BACK IN BLACK"
}, {
  author: "QUEEN -",
  song: " WE WILL ROCK YOU"
}, {
  author: "METALLICA -",
  song: " ENTER SANDMAN"
}];

function createLi(item) {
  var li = document.createElement('li');
  li.setAttribute('class', 'list_item');
  var spanAuthor = document.createElement('span');
  var spanSong = document.createElement('span');
  spanAuthor.setAttribute('class', 'author');
  spanSong.setAttribute('class', 'song');
  spanAuthor.textContent = item.author;
  spanSong.textContent = item.song;
  li.appendChild(spanAuthor);
  li.appendChild(spanSong);
  return li;
}

function createPlaylist() {
  var playlist = document.querySelector('#listBlock');
  playList.forEach(function (item) {
    var li = createLi(item);
    playlist.appendChild(li);
  });
}

createPlaylist();

function modal() {
  var modalItem = document.querySelector('.modal');
  modalItem.classList.toggle('open');
}

;

function trafficLightFuction() {
  var lightOn = document.querySelector('.lightOnClass');
  var next_light;

  switch (lightOn.dataset['color']) {
    case 'red_color':
      next_light = document.querySelector('.yellow_color');
      break;

    case 'yellow_color':
      next_light = document.querySelector('.green_color');
      break;

    case 'green_color':
      next_light = document.querySelector('.red_color');
      break;
  }

  next_light.classList.add('lightOnClass');
  lightOn.classList.remove('lightOnClass');
}