$(document).ready(main) 

function main() {
    $('#btnConsulta').click(() => {
        console.log($('p.parrafo'));
        //Obtenemos las dimensiones del documento
        let ancho = $(document).width();
        let alto = $(document).height();
        let dimensiones = `${ancho} X ${alto}`;

        //Mostramos por pantalla las dimensiones.
        $('p.parrafo:nth-child(1)').text(`Las dimensiones del documento son: ${dimensiones}`);

        //Obtenemos las dimensiones del documento
        ancho = $(window).width();
        alto = $(window).height();
        dimensiones = `${ancho} X ${alto}`;

        //Mostramos por pantalla las dimensiones.
        $('p.parrafo:nth-child(2)').text(`Las dimensiones de la ventana son: ${dimensiones}`);
    });
}


