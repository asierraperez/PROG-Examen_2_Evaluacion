function comprobar_ganador(sel_jugador,sel_maquina,ganadas,nombre_jugador){
    var aux_ganadas=ganadas
    var ganador=document.getElementById("ganador")
    if (sel_jugador=="papel"){
        if(sel_maquina=="papel"){
            ganador.innerHTML="Empate: <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
        }else if(sel_maquina=="piedra"){
            ganador.innerHTML="Gana "+nombre_jugador+": <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
            aux_ganadas++
        }else if(sel_maquina=="tijera"){
            ganador.innerHTML="Gana la máquina: <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
        }
    }
    if (sel_jugador=="piedra"){
        if(sel_maquina=="papel"){
            ganador.innerHTML="Gana la máquina: <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
        }else if(sel_maquina=="piedra"){
            ganador.innerHTML="Empate: <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
        }else if(sel_maquina=="tijera"){
            ganador.innerHTML="Gana "+nombre_jugador+": <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
            aux_ganadas++
        }
    }
    if (sel_jugador=="tijera"){
        if(sel_maquina=="papel"){
            ganador.innerHTML="Gana "+nombre_jugador+": <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
            aux_ganadas++
        }else if(sel_maquina=="piedra"){
            ganador.innerHTML="Gana la máquina: <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
        }else if(sel_maquina=="tijera"){
            ganador.innerHTML="Empate: <br>"+nombre_jugador+" : "+sel_jugador+"<br>Máquina: "+ sel_maquina
        }
    } return aux_ganadas

}