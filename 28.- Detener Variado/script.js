$(document).ready(main) 

function main() {
    /**
     * btn1 = Comenzar animacion
     * btn2 = Detener animacion actual
     * btn3 = Detener todas las animaciones
     * btn4 = Eliminar cola de animaciones
    */

    $('#btn1').click(() => { 
        $('#efecto').slideDown(3000).animate({
            left: '150px'
        }, 1000);
    });
    $('#btn2').click(() => { $('#efecto').stop() });
    $('#btn3').click(() => { $('#efecto').stop(true) });
    $('#btn4').click(() => { $('#efecto').stop(true, true) });
}