$(document).ready(main) 

function main() {
    $('#activador').click(() => { $('#efecto').slideDown(5000) });
    $('#btnDetener').click(() => { $('#efecto').stop() });
}