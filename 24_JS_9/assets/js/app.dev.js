"use strict";

$(function () {
  $('.chart').easyPieChart({
    barColor: '#13E28D',
    trackColor: '#b7bacd',
    scaleColor: '#212534',
    scaleLength: 5,
    lineCap: 'round',
    lineWidth: 3,
    trackWidth: undefined,
    size: 83,
    rotate: 0,
    animate: {
      duration: 1000,
      enabled: true
    },
    easing: function easing(x, t, b, c, d) {
      t = t / (d / 2);

      if (t < 1) {
        return c / 2 * t * t + b;
      }

      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  }); // взяли за інструкцією

  var tabsA = $('.tabs_item a'); // прив'язали значення посилання до змінної

  var cards = $('.card_item'); // призначили змінну для об'єкту, на яке буде посилання

  tabsA.each(function () {
    $(this).click(function (event) {
      event.preventDefault(); // не виконувати функції до моменту потреби в ній

      var href = $(this).attr('href'); // дії, щоб забрати посилання через конкретний атрибут

      cards.each(function () {
        var id = $(this).attr('id'); // присвоюєммо змінну посиланню

        if (href === '#' + id) {
          $(this).removeClass('display-none').siblings().addClass('display-none'); // клас display-none прибираємо, а всім іншим таким елементам присвоюємо значеня display-none
        }
      });
    });
  });
  var stars = $('.icon'); // присвоюємо змінну елементу-рейтингу

  var starsFill = $('.icon path'); // присвоюємо змінну кольору цього елементу

  stars.each(function (index) {
    $(this).mouseover(function () {
      for (var i = 0; i <= index; i++) {
        //цей цикл перебирає всі елементи-рейтингу, та виконує дії тільки до нашого результату: якщо наводимо на 4 зірку, пофарбуютья всі до 4 і 4
        starsFill.eq(i).css("fill", "#ffdd3f");
      }
    }); // колір при наведенні

    $(this).mouseout(function () {
      for (var i = 0; i <= index; i++) {
        starsFill.eq(i).css("fill", "#8D91A3");
      } // колір у звичайному стані

    });
    $(this).click(function () {
      for (var i = 0; i < 5; i++) {
        stars.eq(i).off('mouseover');
        stars.eq(i).off('mouseout');
      } // копіюємо результат, що й при навденні 

    });
  });
});