let iconos = []
let selecciones = []
generarTablero()
function cargarIconos() {
    iconos = [
        '<i class="fa-sharp fa-solid fa-star"></i>',
        '<i class="fa-sharp fa-solid fa-gamepad"></i>',
        '<i class="fa-sharp fa-solid fa-landmark"></i>',
        '<i class="fa-sharp fa-solid fa-music"></i>',
        '<i class="fa-sharp fa-solid fa-bomb"></i>',
        '<i class="fa-sharp fa-solid fa-feather"></i>',
        '<i class="fa-sharp fa-solid fa-check"></i>',
        '<i class="fa-sharp fa-solid fa-dumpster-fire"></i>',
        '<i class="fa-sharp fa-solid fa-briefcase"></i>',
        '<i class="fa-sharp fa-solid fa-cart-shopping"></i>',
        '<i class="fa-sharp fa-solid fa-mug-hot"></i>',
        '<i class="fa-sharp fa-solid fa-car"></i>',
    ]
}
//generar tablero
function generarTablero() {
    //llamar funcion
    cargarIconos()
    selecciones = []
    //representativo para html (id)

    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for (let i = 0; i < 24; i++) {
        tarjetas.push(
            `<div class="area-tarjeta"  onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="cara trasera" id="trasera${i}">
                            ${iconos[0]}
                        </div>
                    <div class="cara superior">
                        <i class="fa-solid fa-circle-question"></i>
                    </div>
                </div>
            </div>`
        )
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }

    }
    tarjetas.sort(() => Math.random() - 0.5)
    tablero.innerHTML = tarjetas.join(" ")
}
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }


}
setInterval(tiempoJuego, 1000)

function deseleccionar(selecciones) {
    setTimeout(() => {
        let trasera1 = document.getElementById("trasera" + selecciones[0])
        let trasera2 = document.getElementById("trasera" + selecciones[1])
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
            let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"

        } else {
            trasera1.style.background = "rgb(82, 4, 172)"
            trasera2.style.background = "rgb(82, 4, 172)"
        }
    }, 1000);
}