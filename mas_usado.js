function mas_usado(piedra,papel,tijera){
    var usado =document.getElementById("usado")
    if(piedra>papel && piedra>tijera){
        usado.innerHTML="Piedra, "+ piedra+" veces"
    }
    if(papel>piedra && papel>tijera){
        usado.innerHTML="Papel, "+ papel+" veces"
    }
    if(tijera>piedra && tijera>papel){
        usado.innerHTML="Tijera, "+ tijera+" veces"
    }


}