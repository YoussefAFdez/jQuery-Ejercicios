$(document).ready(main) 

function main() {
    // $('#activador').click(() => $('#efecto').css('color', 'red').slideUp(2000).slideDown(2000));
    $('#activador').click(() => $('#efecto')
        .css('color', 'red')
        .slideUp(2000)
        .slideDown(2000)
    );
}
