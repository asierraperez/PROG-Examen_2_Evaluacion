function preload(){
    var jugadas = localStorage.getItem("turnos")
    var ganadas=localStorage.getItem("ganadas")
    var piedra =localStorage.getItem("usado_piedra")
    var papel = localStorage.getItem("usado_papel")
    var tijera = localStorage.getItem("usado_tijera")
    
    //Uso de JQUERY
    $("#turnos").html(jugadas)
    $("#p_ganadas").html(ganadas)
   
    mas_usado(parseInt(piedra),parseInt(papel),parseInt(tijera))
}