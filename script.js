/* Funcionalidad juego */
let iconos

//Función cargar tarjetas
function cargarIconos() {

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
            `<div class="area-tarjeta">
                <div class="tarjeta" id="tarjeta ${i}">
                    <div class="cara trasera">
                        <i class="fa-solid fa-dragon"></i>
                    </div>
                    <div class="cara superior">
                        <i class="fa-solid fa-circle-question"></i>
                    </div>
                </div>
            </div>`
        )
    }

    tablero.innerHTML = tarjetas.join(" ")

}