/* Funcionalidad juego */
let iconos = []

//Función cargar tarjetas
function cargarIconos() {
    iconos = [
        '<i class="fa-solid fa-hand-fist"></i>',
        '<i class="fa-solid fa-book-skull"></i>',
        '<i class="fa-solid fa-ghost"></i>',
        '<i class="fa-solid fa-dragon"></i>',
        '<i class="fa-solid fa-chess-knight"></i>',
        '<i class="fa-solid fa-wand-sparkles"></i>',
        '<i class="fa-solid fa-chess-rook"></i>',
        '<i class="fa-solid fa-ring"></i>',
        '<i class="fa-solid fa-scroll"></i>'
    ]
}

//Generar tablero
function generarTablero() {
    //Llamar funcion cargar iconos
    cargarIconos();

    //Representativo para HTML por medio de ID
    let tablero = document.getElementById("tablero");
    //Arreglos for
    let tarjetas = []

    for (let i = 0; i < 18; i++) {
        tarjetas.push(
            `<div class="area-tarjeta" onclick="seleccionarTarjeta(${i})>
                <div class="tarjeta" id="tarjeta ${i}">
                    <div class="cara trasera" id="trasera ${i}">
                        ${iconos[0]}
                    </div>
                    <div class="cara superior">
                        <i class="fa-solid fa-circle-question"></i>
                    </div>
                </div>
            </div>`
        )

        if (i%2==1)
        iconos.splice(0,1)
    }

    tarjetas.sort(() => Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ")

}

let selecciones = []

function seleccionarTarjeta (i) {
    let tarjeta = doc.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform != "rotateY(0deg)"
        selecciones.push(i)
    }

    if (selecciones.length == 2){
        deseleccionar(selecciones)
        selecciones=[]
    }
}

function deseleccionar (selecciones) {
    setTimeout (()=>{
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        
        if(tr1.innerHTML != tr2.innerHTML){
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])   
           
            tarjeta1.style.transform="rotateY(0deg)"
            tarjeta2.style.transform="rotateY(0deg)"
        } else {
            trasera1.style.background="plum"
            trasera2.style.background="plum"
        }

    },1000);
}