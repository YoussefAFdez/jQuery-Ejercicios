$(document).ready(main) 

function main() {
    $('.target').click(function() { $("a[target]").hide() });
    $('button:not(.target)').click(function() { $("a:not([target])").hide() });
}