$(document).ready(main) 

function main() {

    $('#activador').click(() => {
        $('.efecto').each(function() { 
            let item = $(this).find('p');
            if (item.text() === "HELLO") {
                item.css("font-size", "2em");
                // item.css("font-size", parseInt(item.css("font-size")) + 4); //Incrementos constantes
            }

            $(this).animate({
                left: '100px'
            });
        });
    });
}