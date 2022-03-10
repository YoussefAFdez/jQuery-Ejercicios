$(document).ready(main) 

function main() {

    $('#btnEnlace').click(() => {
        $('#enlace')
            .prop('href', 'http://www.google.es/intl/es/earth/index.html')
            .text('Google Earth')
    });

}


