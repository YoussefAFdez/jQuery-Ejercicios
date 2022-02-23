$(document).ready(main) 

function main() {
    $("table tr:nth-child(even)").css("background-color", "red");
    $("table tr:nth-child(odd)").css("background-color", "green");
}