$(document).ready(main) 

function main() {
    $('#btnCambio').click(() => $('p.parrafo')
        .css('background-color', 'yellow')
        .css('font-size', '1.5em')
        .css('color', 'black')
    );
}


