"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*  1) Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за 
допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна 
редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути 
поведінку за замовчуванням для цих поєднань клавіш.
    2) Cтворити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані 
цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
    3) Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути 
мишку в правому нижньому кутку і тягнути її далі. */
//  *Створити HTML-сторінку для відображення/редагування тексту. (index.html)- complete
//  *При відкритті сторінки текст відображається за допомогою тега div. (starter_block)- complete
//   Присвоєння тексту блоку starter_block  по id - complete
var starterBlockText = "Перше завданнячко"; // створюємо текст для блоку

var justText = document.getElementById('starterBlock'); // прив'язуємо змінній елемент в html-документі

justText.textContent = starterBlockText; // вставляємо текст
// Створення другого об'єкту - текстового поля, на яке має переходити наш перший елемент

var secondBlockTextArea = document.getElementById('secondBlockTextArea'); // прив'язуємо змінній елемент в html-документі

secondBlockTextArea.value = starterBlockText; // присвоюємо значення початкового тексту, щоб його не сбило 
// *При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. 

document.addEventListener('keydown', function (event) {
  // створємо подію
  if (event.code == 'KeyE' && event.ctrlKey) {
    //ставимо комінацію клавіш, за якої має відбуватися подія
    event.preventDefault(); // скасовує дії за цієї комбінацією за замоувчванням браузера

    justText.classList.toggle('unvisiable'); // ховаємо цей об'єкт
  }
});
document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyS' && event.ctrlKey) {
    event.preventDefault();
    myText = secondBlockTextArea.value;
    justText.textContent = myText; // махінації для збереження тексту, навіть після його зміни

    secondBlockTextArea.classList.toggle('unvisiable');
  }
}); // // Створюємо базу для таблиці

var info = [{
  album: 'Queen I',
  year: 1973
}, {
  album: 'Queen II',
  year: 1974
}, {
  album: 'Sheer Heart Attack',
  year: 1974
}, {
  album: 'A Night At The Opera',
  year: 1975
}, {
  album: 'A Day At The Races',
  year: 1976
}, {
  album: 'News Of The World',
  year: 1977
}, {
  album: 'Jazz',
  year: 1978
}, {
  album: 'Live Killers',
  year: 1970
}, {
  album: 'Game',
  year: 1980
}, {
  album: 'Flash Gordon',
  year: 1980
}, {
  album: 'Greatest Hits',
  year: 1981
}, {
  album: 'Hot Space',
  year: 1982
}, {
  album: 'Works',
  year: 1984
}, {
  album: 'A Kind Of Magic',
  year: 1986
}, {
  album: 'Live Magic',
  year: 1986
}, {
  album: 'The Miracle',
  year: 1989
}, {
  album: 'Innuendo',
  year: 1991
}, {
  album: 'Greatest Hits II',
  year: 1992
}, {
  album: 'Made In Heaven',
  year: 1997
}]; // присвоюємо змінній елемент в html-документі

var table = document.querySelector('.table tbody'); // присвоюємо змінній-масиву елемент заголовки таблиці

var _document$querySelect = document.querySelectorAll('.table th'),
    _document$querySelect2 = _toArray(_document$querySelect),
    fields = _document$querySelect2.slice(0); // цими діями ми створюємо елементи та присвоюємо їм значенння нашого массиву


function renderData() {
  // створили функцію
  info.forEach(function (item) {
    var tr = document.createElement('tr');

    for (var key in item) {
      var td = document.createElement('td');
      td.textContent = item[key];
      tr.appendChild(td);
      /* цими діями виконує по одному разу створення елементу td
      для блоку tr */
    }

    table.appendChild(tr);
  });
} //видалення рядків


function clearTable() {
  table.innerHTML = '';
}

; // функція для сортування

function sortHelper(sortByField) {
  switch (sortByField) {
    case 'year':
      return function (a, b) {
        return a[sortByField] > b[sortByField] ? 1 : -1;
      };

    /* сортування по року,
    від більшого до меншого*/

    case 'album':
      return function (a, b) {
        return a[sortByField].toLowerCase() > b[sortByField].toLowerCase() ? 1 : -1;
      };

    /* сортування по назві,
    від більшого до меншого*/
  }
} // функція саме для клікабельності необхідних заголовків


fields.forEach(function (item) {
  item.addEventListener('click', function (event) {
    var field = item.dataset.sort;
    info.sort(sortHelper(field));
    clearTable();
    renderData();
  });
});
renderData(); // початкові координати

var ie = 0;
var op = 0;
var ff = 0;
var mainBlock; // змінна для основного блоку 

var blockChanging; // змінна для блоку, в який вміст основного контейнера буде переходит

var widthChanging = 0; // змінна для подальших перетворень блоку

var changingHeight = 0; // змінна для подальших перетворень блоку

onload = function onload() {
  mainBlock = document.getElementById("block"); // прив'язуємо змінній елемент в html-документі

  blockChanging = document.getElementById("block-changing"); // прив'язуємо змінній елемент в html-документі

  document.onmouseup = clearXY;
  blockChanging.onmousedown = saveWH; // дії для слідкування за курсором миші 
};

function getXY(obj_event) {
  if (obj_event) {
    x = obj_event.pageX;
    y = obj_event.pageY;
  } else {
    x = clientX;
    y = clientY;

    if (ie) {
      y -= 2;
      x -= 2;
    }
  }

  return new Array(x, y);
} // отримання координат крусора миші 


function saveWH(obj_event) {
  var point = getXY(obj_event); // створюємо змінну для визначення курсора миші в данний момент 

  w_block = block.clientWidth; // вісь Х

  h_block = block.clientHeight; // вісь Y 

  widthChanging = w_block - point[0]; // згідно з новим розташуванням курсору дізнамся зміни для нових координат 

  changingHeight = h_block - point[1];
  document.onmousemove = resizeBlock;
} //зміна ширини


function clientWidth() {
  return document.documentElement.clientWidth == 0 ? document.body.clientWidth : document.documentElement.clientWidth;
} //зміна висоти


function clientHeight() {
  return document.documentElement.clientHeight == 0 ? document.body.clientHeight : document.documentElement.clientHeight;
} //зміни тільки при натисканні


function clearXY() {
  document.onmousemove = null;
}

function resizeBlock(obj_event) {
  var point = getXY(obj_event);
  new_w = widthChanging + point[0];
  new_h = changingHeight + point[1];
  block.style.width = new_w + "px"; // зміна ширини

  block.style.height = new_h + "px"; // зміна висоти
  //вставлення обмежень до розмірів екрану

  if (block.offsetLeft + block.clientWidth > clientWidth()) block.style.width = clientWidth() - block.offsetLeft + "px";
  if (block.offsetTop + block.clientHeight > clientHeight()) block.style.height = clientHeight() - block.offsetTop + "px";
}