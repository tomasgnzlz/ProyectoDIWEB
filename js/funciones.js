$(document).ready(function(){
    var iconoMenu = $("#logo-menu");
    var menuDesplegable = $(".menu");
    var cerrarMenu = $(".menu > div.cabecera-menu > img");

    // Cuando se hace click sobre el icono del menu, este se desliza de izquierda a derecha
    iconoMenu.on("click", function() {
        menuDesplegable.addClass("menu-abierto");
    });

    // Cuando se hace click sobre la flecha de volver, el menu se oculta
    cerrarMenu.on("click", function() {
        menuDesplegable.removeClass("menu-abierto");
    });


    var contenido = $("div#contenido");
    $(".boton-cookies").on("click", function() {
        // Oculto el panel de cookies
        $("#cookies-principal").fadeOut();
        // quito el efecto blur
        contenido.removeClass("blur");
    });

    // Se pone un borde a los botones cuando se esta sobre ellos
    
    var botonesCookies = $(".boton-cookies");
    botonesCookies.on({
        mouseenter:function () {
            $(this).css("border","solid 1px black");
        },
        mouseleave:function () {
            $(this).css("border","");
        }
    })

    // SLIDER
    $("#lightSlider").lightSlider({
        item:1,
        loop:true
    }); 
});

//ERROR EN FORMULARIOS DE CONTACTO
$(document).ready(function() {

    $("#boton-error").on("click", function() {
        $(".error-campos").each(function() {
                $(this).addClass('placeholder-moved');
                $(".texto-error-campos").css("opacity","1");
        });
    });

});

/*ERROR EN FORMULARIOS DE PROCESO DE COMPRA*/ 
$(document).ready(function() {
    $("#boton-error-compra").on("click", function() {
        $(".bebas-neue-regular").each(function() {
                $(this).addClass('placeholder-moved');
                $(this).siblings(".error-campos-compra").css("display", "flex");
        });
    });
});









