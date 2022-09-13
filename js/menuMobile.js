$(document).ready(function () {

  var num = 1;

  $('#btnMenu').on('click', function (e) {

    e.preventDefault();
    if (num == 1) {
      $('.menu-mobile .menu-principal').animate({left:0}, 300, function () {
        num = 0;
      });
    } else {
      $('.menu-mobile .menu-principal').animate({left:'-100%'}, 300, function () {
        num = 1;
      })
    }

  })

  $('.menu-mobile .menu-principal a').on('click', function () {

    $('.menu-mobile .menu-principal').animate({left:'-100%'}, 300, function () {
      num = 1;
    })

  })

});
