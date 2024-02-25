$(document).ready(function(){
    var iconoMenu = $("#logo-menu");
    var menuDesplegable = $(".menu");
    var cerrarMenu = $(".menu > div.cabecera-menu > img");

    // Cuando se hace click sobre el icono del menu, este se desliza de izquierda a derecha
    iconoMenu.on('click', function() {
        menuDesplegable.addClass('menu-abierto');
    });

    cerrarMenu.on('click', function() {
        menuDesplegable.removeClass('menu-abierto');
    });




 







});


