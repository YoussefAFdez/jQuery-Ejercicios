$(main)

function main() {
    $('#btnPintar').click(() => { 
        $('#tabla tr').each((i, element) => {
            if (i == 0) $(element).css('background-color', 'orange');
            else if (i < 3) $(element).css('background-color', 'palevioletred');
            else if (i == 3) $(element).css('background-color', 'gray');
            else $(element).css('background-color', 'paleturquoise');
        })
    });
}


