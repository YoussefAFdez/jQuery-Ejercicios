$(document).ready(main) 

function main() {
    $(".bloque").hide(); //Ocultamos todos los párrafos

    //Forma 1 - Iterando con this
    // $("button").click(() => { 
    //     $('.bloque').each(function(i) { 
    //         switch (i) {
    //             case 0: $(this).fadeOut(); break;
    //             case 1: $(this).fadeIn('slow'); break;
    //             case 2: $(this).fadeIn('3000'); break;
    //         }
    //     });
    // });

    //Forma 2 - Iterando con funcion flecha, agregando un segundo parametro a la funcion each()
    // $("button").click(() => { 
    //     $('.bloque').each((i, item) => { 
    //         switch (i) {
    //             case 0: $(item).fadeIn(); break;
    //             case 1: $(item).fadeIn('slow'); break;
    //             case 2: $(item).fadeIn(3000); break;
    //         }
    //     });
    // });


    //Forma 3 - Utilizando un array de parametros
    let parametros = ['', 'slow', 3000];
    $("button").click(() => $('.bloque').each((i, item) => $(item).fadeIn(parametros[i])));
}