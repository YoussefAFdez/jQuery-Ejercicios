$(main)

function main() {
    $('#btnBuscar').click(() => {
        //Desmarcamos en caso de que hubiera uno marcado anteriormente
        let marcados = $('[style="background-color: palevioletred;"]');
        marcados.css('background-color', 'white');

        let texto = $('#tbBuscar').val();
        $(`p:contains(${texto})`).css('background-color', 'palevioletred');
    });
}


