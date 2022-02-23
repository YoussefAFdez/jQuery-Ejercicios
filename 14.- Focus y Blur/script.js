window.addEventListener("DOMContentLoaded", main)

$(document).ready(main) 

function main() {
    $("input[type='text']").focus(function() { $(this).parent().css("background-color", "#bdecb6")});
    $("input[type='text']").blur(function() { $(this).parent().css("background-color", "#f1b1bc")});
}