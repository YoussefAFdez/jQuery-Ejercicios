$(document).ready(main) 

function main() {
    let color = $("p.parrafo:nth-child(1)").css('background-color')
    $('#btnAlert').click(() => alert(color));
}


