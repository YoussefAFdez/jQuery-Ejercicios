$(document).ready(main) 

function main() {
    $("p").mousedown((e) => { 
        switch(e.which) {
            case 1:
                alert('Has Pulsado Click Izquierdo');
                break;
            case 2:
                alert('Has Pulsado El Click Central.');
                break;
            case 3:
                alert('Has Pulsado El Click Derecho.');
                break;
        }
     } );
}