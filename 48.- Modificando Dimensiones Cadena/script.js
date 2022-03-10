$(document).ready(main) 

function main() {
    $('#btnModificar').click(() => { 
        let ancho = $('#tbAncho').val();
        let alto = $('#tbAlto').val();

        $('#bloquePrincipal').width(ancho).height(alto);
     });
}


