$(document).ready(main) 

function main() {
    $('#activador').click(() => { 
        //onsole.log('click');
        $('#efecto').animate({
            left: '250px',
            height: '+=150px',
            width: '+=150px'
        }); 
    });
}