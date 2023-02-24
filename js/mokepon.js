let ataqueJugador
let ataqueEnemigo
let vidasJugador = 5
let vidasEnemigo = 5

var sound1 = new Audio();
sound1.src = "./assets/scorbunny.mp3"

var sound2 = new Audio();
sound2.src = "./assets/mudkip.mp3"

var sound3 = new Audio();
sound3.src = "./assets/snivy.mp3"

var sound4 = new Audio();
sound4.src = "./assets/tarjetas.mp3"

var sound5 = new Audio();
sound5.src = "./assets/gamestart.mp3"



function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let sectionReglas = document.getElementById("reglas")
    sectionReglas.style.display = "none"

    let botonEntrenadorJugador = document.getElementById("boton-entrenador")
    botonEntrenadorJugador.addEventListener("click", seleccionarEntrenadorJugador)
    
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener("click", ataquePlanta)

    let botonReiniciar = document.getElementById("reiniciar")

    botonReiniciar.addEventListener("click", reiniciarJuego)
    
}
function seleccionarEntrenadorJugador(){

    let sectionSeleccionarEntrenador = document.getElementById("seleccionar-entrenador")
    sectionSeleccionarEntrenador.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputSteven = document.getElementById("Steven")
    let inputCynthia = document.getElementById("Cynthia")
    let inputAsh= document.getElementById("Ash")
    let inputLionel = document.getElementById("Lionel")
    let inputIris = document.getElementById("Iris")
    let spanEntrenadorJugador = document.getElementById("entrenador-jugador")
    
    if(inputSteven.checked){
        spanEntrenadorJugador.innerHTML = "Steven"

    } else if (inputCynthia.checked){
        spanEntrenadorJugador.innerHTML = "Cynthia"  

    } else if (inputAsh.checked){
        spanEntrenadorJugador.innerHTML = "Ash"

    } else if (inputLionel.checked){
        spanEntrenadorJugador.innerHTML = "Lionel" 

    } else if (inputIris.checked){
        spanEntrenadorJugador.innerHTML = "Mencía"

    } else{
        alert("No seleccionaste ninguna mascota 😒")

    }

    let botonEntrenadorJugador = document.getElementById("boton-entrenador")
    botonEntrenadorJugador.disabled = true
    let sectionReglas = document.getElementById("reglas")
    sectionReglas.style.display = "flex"

    seleccionarEntrenadorEnemigo()
          
}

function seleccionarEntrenadorEnemigo(){
    let entrenadorAleatorio = aleatorio(1, 5)
    let spanEntrenadorEnemigo = document.getElementById("entrenador-enemigo")

    if(entrenadorAleatorio == 1){
        spanEntrenadorEnemigo.innerHTML = "Rival Dianta"

    } else if (entrenadorAleatorio == 2){
        spanEntrenadorEnemigo.innerHTML = "Rival Mirto"

    } else if (entrenadorAleatorio == 3){
        spanEntrenadorEnemigo.innerHTML = "Rival Red"
    
    } else if (entrenadorAleatorio == 4){
        spanEntrenadorEnemigo.innerHTML = "Rival Blue"
    
    } else {
        spanEntrenadorEnemigo.innerHTML = "Rival Lance"

    } 
}

function ataqueFuego(){
    ataqueJugador = "Scorbunny🔥"
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueJugador = "Mudkip💧"
    ataqueAleatorioEnemigo()
}
function ataquePlanta(){
    ataqueJugador = "Snivy🌿"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "Scorbunny🔥"

    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Mudkip💧"

    } else {
        ataqueEnemigo = "Snivy🌿"

    }

    combate()   
}

function combate(){

    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")


    if (ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE 🤔")

    } else if ((ataqueJugador == "Scorbunny🔥" && ataqueEnemigo == "Snivy🌿") || (ataqueJugador == "Mudkip💧" && ataqueEnemigo == "Scorbunny🔥") || (ataqueJugador == "Snivy🌿" && ataqueEnemigo == "Mudkip💧")) {
        crearMensaje("GANASTE 😎")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    
    } else { 
        crearMensaje("PERDISTE 😒")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador

    }

    revisarVidas()
}

function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("¡FELICITACIONES! GANASTE, ERES UN MAESTRO POKÉMON")
    
    } else if (vidasJugador == 0){
        crearMensajeFinal("TUS POKÉMON NO PUEDEN CONTINUAR, PERDISTE")

    }
}
    

function crearMensaje(resultado){

    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal){

    let sectionMensajes = document.getElementById("resultado")
    sectionMensajes.innerHTML = resultadoFinal


    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor (Math.random() * (max - min + 1) + min)
} 

window.addEventListener("load", iniciarJuego)