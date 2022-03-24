function main(){

    preload()
    var sel_jugador=document.getElementsByClassName("btn")
    var reset=document.getElementById("reset")
    var seleccion=document.getElementById("seleccion")
    var seleccionado =false
    var jugador
    var eleccion_maquina
    var maquina=["piedra","papel","tijera"]
    var turnos=localStorage.getItem("turnos")
    var partidas_ganadas=localStorage.getItem("ganadas")
    var usado_tijera=localStorage.getItem("usado_tijera")
    var usado_piedra=localStorage.getItem("usado_piedra")
    var usado_papel=localStorage.getItem("usado_papel")
    var nombre
    if (localStorage.getItem("nombre")){
        nombre=localStorage.getItem("nombre")
    } else{
        nombre=prompt("Introduce tu nombre")
        localStorage.setItem("nombre",nombre)
    }


    for (let i = 0; i < sel_jugador.length; i++) {
        sel_jugador[i].addEventListener("click",(evt)=>{
            console.log(evt.currentTarget.innerHTML)
            if(evt.currentTarget.innerHTML=="Piedra"){
                seleccion.innerHTML="Elegiste piedra"
                usado_piedra++
                jugador="piedra"
            }
            if(evt.currentTarget.innerHTML=="Papel"){
                seleccion.innerHTML="Elegiste papel"
                usado_papel++
                jugador="papel"
            }
            if(evt.currentTarget.innerHTML=="Tijera"){
                seleccion.innerHTML="Elegiste tijera"
                usado_tijera++
                jugador="tijera"
            }
        mas_usado(usado_piedra,usado_papel,usado_tijera)
        seleccionado=true
        eleccion_maquina=juego(maquina)
        partidas_ganadas=comprobar_ganador(jugador,eleccion_maquina,partidas_ganadas,nombre)
        turnos++
        
        //uso de JQUERY
        $("#turnos").html(turnos)
        $("#p_ganadas").html(partidas_ganadas)

        localStorage.setItem("turnos",turnos)
        localStorage.setItem("ganadas",partidas_ganadas)
        localStorage.setItem("usado_piedra",usado_piedra)
        localStorage.setItem("usado_papel",usado_papel)
        localStorage.setItem("usado_tijera",usado_tijera)
      
    })

    
}
reset.addEventListener("click",(evt)=>{
        localStorage.clear()
        turnos=0
        partidas_ganadas=0
        usado_papel=0
        usado_piedra=0
        usado_tijera=0
        nombre=""
        $("#turnos").html("0")
        $("#p_ganadas").html("0")
        $("#usado").html("")
        nombre=prompt("Introduce tu nombre")
        localStorage.setItem("nombre",nombre)
    })
    
}

main()