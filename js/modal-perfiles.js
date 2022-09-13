$(document).ready(function () {

    $('.perfil1').on('click', function () {
        var numero=$(this).attr('id');
        var rutaImagen = $('.img-'+numero).attr('src');
        var descriptionperfil = document.querySelector('.descripcion-'+numero).textContent;
        var nameperfil=document.querySelector('.name-'+numero).textContent;
        var modal = '<div class="modal" id="modal"><div class="contenedor-modal"><img src="'+ rutaImagen  +'" alt=""><div class="textos-modal"><h2>'+ nameperfil+'</h2><p>'+descriptionperfil+'</p></div></div><div class="btn-cerrar" id="btnCerrar"><i class="fa fa-times" aria-hidden="true"></i></div></div>';
  
        $('#acercaDe').after(modal);
  
        $('#btnCerrar').on('click', function () {
        $('#modal').remove();
        })
    })
  
    $(document).on('keyup', function (e) {
      if (e.which==27) {
        $('#modal').remove();
      }
    })
  
  });
  