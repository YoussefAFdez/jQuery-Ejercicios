$(document).ready(main) 

function main() {

    $('#btnToggle').click(function() {
        $("p").toggleClass('resaltado');
        if (!$('.resaltado').length) $(this).text('Agregar clase resaltado');
        else $(this).text('Eliminar clase resaltado');
    });

}


