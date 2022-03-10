$(document).ready(main) 

function main() {

    $('#btnEnlace').click(() => {
        $('#enlace')
            .prop('href', $('#enlace').prop('href') + '/intl/es/earth/index.html')
            .text('Google Earth')
    });

}


