$(main)

function main() {
    $('#btnPintar').click(() => { 
        let animados = $(".bloque:animated");
        animados.each(function() {
            $(this).css('background-color', 'black');
        })
    });

     function animacion() {
         $('.animado').slideToggle(1000, animacion);
     }
     animacion();
}


