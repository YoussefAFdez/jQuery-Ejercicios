$(main)

function main() {
    $('#btnResaltar').click(() => { 

        //Desmarcamos en caso de que hubiera uno marcado anteriormente
        let marcados = $('[style="background-color: palevioletred;"]');
        marcados.css('background-color', 'white');

        let num = $('#tbNumero').val();
        $(`#lista li:nth-child(${num})`).css('background-color', 'palevioletred');
    });
}


