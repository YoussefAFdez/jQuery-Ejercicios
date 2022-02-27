$(document).ready(main) 

function main() {

    //Forma 1 - Iterando con this
    // $("button").click(() => { 
    //     $('.bloque').each(function(i) { 
    //         switch (i) {
    //             case 0: $(this).fadeToggle(); break;
    //             case 1: $(this).fadeToggle('slow'); break;
    //             case 2: $(this).fadeToggle('3000'); break;
    //         }
    //     });
    // });

    //Forma 2 - Iterando con funcion flecha, agregando un segundo parametro a la funcion each()
    // $("button").click(() => { 
    //     $('.bloque').each((i, item) => { 
    //         switch (i) {
    //             case 0: $(item).fadeToggle(); break;
    //             case 1: $(item).fadeToggle('slow'); break;
    //             case 2: $(item).fadeToggle(3000); break;
    //         }
    //     });
    // });


    //Forma 3 - Utilizando un array de parametros
    let parametros = ['', 'slow', 3000];
    $("button").click(() => $('.bloque').each((i, item) => $(item).fadeToggle(parametros[i])));
}