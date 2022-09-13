$(document).ready(function () {

  var slider = $('#slider');
  var btnAnterior = $('#btnAnterior');
  var btnSiguiente = $('#btnSiguiente');
  var mediaquery = matchMedia("(orientation:portrait)");


  if(mediaquery.matches){
    $('#slider .slide:last').insertBefore('#slider .slide:first');
    slider.css('margin-left', '-79%');
    function moverDerecha() {
      if (!slider.is(':animated')) {
        slider.animate({
          marginLeft: '-40.6%'
        }, 700, function () {
          $('#slider .slide:first').insertAfter('#slider .slide:last');
          slider.css('margin-left', '-79%');
          resetInterval();
        });
      }
  
    }
  
    btnSiguiente.on('click', moverDerecha);
  
    function moverIzquierda() {
      if (!slider.is(':animated')) {
        $('#slider .slide:last').insertBefore('#slider .slide:first');
        slider.css('margin-left', '-40.6%');
        slider.animate({
          marginLeft: '-79%'
        }, 700, function () {
          resetInterval()
        });
      }
  
    }

  }else{
    $('#slider .slide:last').insertBefore('#slider .slide:first');

    slider.css('margin-left', '-38%');

    function moverDerecha() {
      if (!slider.is(':animated')) {
        slider.animate({
          marginLeft: '-81.6%'
        }, 700, function () {
          $('#slider .slide:first').insertAfter('#slider .slide:last');
          slider.css('margin-left', '-38%');
          resetInterval();
        });
      }
  
    }
  
    btnSiguiente.on('click', moverDerecha);
  
    function moverIzquierda() {
      if (!slider.is(':animated')) {
        $('#slider .slide:last').insertBefore('#slider .slide:first');
        slider.css('margin-left', '-81.6%');
        slider.animate({
          marginLeft: '-38%'
        }, 700, function () {
          resetInterval()
        });
      }
  
    }


  }
 

  btnAnterior.on('click', moverIzquierda);



  var intervalo = setInterval(moverDerecha, 5000);

  function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 5000);
  }

});
