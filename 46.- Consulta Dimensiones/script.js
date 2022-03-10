$(document).ready(main) 

function main() {
    $('#btnConsulta').click(() => {
        let ancho = $('#bloquePrincipal').css('width');
        let alto = $('#bloquePrincipal').css('height');

        //Modificamos el contenido del parrafo localizado en el bloque
        $('#bloquePrincipal p').text(`El bloque tiene un ancho de ${ancho} y un alto de ${alto}`);
    });
}


