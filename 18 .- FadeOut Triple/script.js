$(document).ready(main) 

function main() {

    //Forma 1 - Iterando con this
    // $("button").click(() => { 
    //     $('.bloque').each(function(i) { 
    //         switch (i) {
    //             case 0: $(this).fadeOut(); break;
    //             case 1: $(this).fadeOut('slow'); break;
    //             case 2: $(this).fadeOut('3000'); break;
    //         }
    //     });
    // });

    //Forma 2 - Iterando con funcion flecha, agregando un segundo parametro a la funcion each()
    // $("button").click(() => { 
    //     $('.bloque').each((i, item) => { 
    //         switch (i) {
    //             case 0: $(item).fadeOut(); break;
    //             case 1: $(item).fadeOut('slow'); break;
    //             case 2: $(item).fadeOut(3000); break;
    //         }
    //     });
    // });


    //Forma 3 - Utilizando un array de parametros
    let parametros = ['', 'slow', 3000];
    $("button").click(() => $('.bloque').each((i, item) => $(item).fadeOut(parametros[i])));
}