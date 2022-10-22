
$(function(){
  $('.slider_block1').slick({
      lazyLoad: 'ondemand',
      infinite: false,
      autoplay:true,
      autoplaySpeed:300,
      speed: 1400,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    });
});

// Констукція для виконання функції тільки тоді, коли DOM готовий до виконання
$(function(){
    $('.slider_block2').slick({
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="./assets/img/prev-icon.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="./assets/img/next-icon.svg"/></button>',
        infinite: true,
        autoplay:true,
        autoplaySpeed:1300,
        speed: 1400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="./assets/img/prev-icon.svg"/></button>',
                nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="./assets/img/next-icon.svg"/></button>',
            }
          },
          {
            breakpoint: 769,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
          },
          {
            breakpoint: 569,
            settings: {
                lazyLoad: 'ondemand',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
          }
        ]
      });
});

$(function(){
  $('.slider_block3').slick({
      lazyLoad: 'ondemand',
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="./assets/img/prev-icon.svg"/></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="./assets/img/next-icon.svg"/></button>',
      infinite: true,
      autoplay:true,
      autoplaySpeed:1300,
      speed: 1400,
      slidesToShow: 7,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
              lazyLoad: 'ondemand',
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="./assets/img/prev-icon.svg"/></button>',
              nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="./assets/img/next-icon.svg"/></button>',
          }
        },
        {
          breakpoint: 769,
          settings: {
              lazyLoad: 'ondemand',
              slidesToShow: 5,
              slidesToScroll: 1,
              prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="./assets/img/prev-icon.svg"/></button>',
              nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="./assets/img/next-icon.svg"/></button>',
          }
        },
        {
          breakpoint: 569,
          settings: {
              lazyLoad: 'ondemand',
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
              arrows: false
          }
        }
      ]
    });
});
