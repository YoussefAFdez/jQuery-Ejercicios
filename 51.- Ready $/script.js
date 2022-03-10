$(main)

function main() {
    let token = $;
    token('#btnCambiar').click(() => { token('#bloquePrincipal p').css('color', 'yellow') });
}


