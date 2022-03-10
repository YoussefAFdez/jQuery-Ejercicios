$(document).ready(main) 

function main() {

    $('#btnAgregar').click(() => { $("p").addClass('resaltado') });
    $('#btnEliminar').click(() => { $("p.resaltado").removeClass('resaltado') });

}


