$(function () { 
  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () { 
    $(this).addClass('directions__filter-btn--active')
  })

  $('.team__slider').slick({
    arrows: false,
    slidesToShow: 4,
    Infinity: true,
    draggable: false,
  })
  $('.team__slider-prev').on('click', function (e) { 
    e.preventDefault();
    $('.team__slider').slick('slickPrev')
  })
  $('.team__slider-next').on('click', function (e) { 
    e.preventDefault();
    $('.team__slider').slick('slickNext')
  })
  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
  })

  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault();
    $('.testimonials__slider').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault();
    $('.testimonials__slider').slick('slickNext')
  })

})