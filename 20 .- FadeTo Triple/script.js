$(document).ready(main) 

function main() {

    //Forma 1 - Iterando con this
    // $("button").click(() => { 
    //     $('.bloque').each(function(i) { 
    //         switch (i) {
    //             case 0: $(this).fadeTo('slow', 0.15); break;
    //             case 1: $(this).fadeTo('slow', 0.4);slow'); break;
    //             case 2: $(this).fadeTo('slow', 0.7);3000'); break;
    //         }
    //     });
    // });

    //Forma 2 - Iterando con funcion flecha, agregando un segundo parametro a la funcion each()
    // $("button").click(() => { 
    //     $('.bloque').each((i, item) => { 
    //         switch (i) {
    //             case 0: $(item).fadeTo('slow', 0.15); break;
    //             case 1: $(item).fadeTo('slow', 0.4);slow'); break;
    //             case 2: $(item).fadeTo('slow', 0.7);3000); break;
    //         }
    //     });
    // });


    //Forma 3 - Utilizando un array de parametros
    let opacidades = [0.15, 0.4, 0.7];
    $("button").click(() => $('.bloque').each((i, item) => $(item).fadeTo('slow', opacidades[i])));
}