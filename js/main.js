$(function () { 
  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () { 
    $(this).addClass('directions__filter-btn--active')
  })
})