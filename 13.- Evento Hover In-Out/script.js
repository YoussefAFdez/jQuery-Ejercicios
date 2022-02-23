window.addEventListener("DOMContentLoaded", main)

$(document).ready(main) 

function main() {
    $(".detector").hover(entrada, salida);
}

function entrada() {
    $("#bloque").css("background-color", "green");
    $("#bloque p").text("El ratón se encuentra encima del párrafo");
}

function salida() {
    $("#bloque").css("background-color", "red");
    $("#bloque p").text("El ratón ha salido del párrafo");
}