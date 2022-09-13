$(document).ready(function () {

  var Banner = $('#banner');

  function alturaBanner(){

    var altura = $(window).height();
    Banner.css('height', altura);

  }
  alturaBanner();

  $(window).resize(alturaBanner);

});
