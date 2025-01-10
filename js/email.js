let btn_email = document.getElementById("btn-email");
let mensaje = document.getElementById("mensajeCorreoCopiado");
let contenedorMensaje = document.getElementById("contenedorMensajeCorreo")
let body = document.querySelector("main");
const texto = "lferreiro.823@gmail.com";

btn_email.addEventListener("click", copiarTexto);

function copiarTexto() {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    elementoTemporal.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    setTimeout(mostrarCorreoCopiado, 300);
}

function mostrarCorreoCopiado(){
    mensaje.innerText = "Se copió el correo " + texto + " al portapapel.";
    contenedorMensaje.classList.remove("oculto");
    mensaje.classList.remove("oculto");
    body.classList.add("blur")
    setTimeout(ocultarCorreoCopiado, 5000);
}

function ocultarCorreoCopiado(){
    body.classList.remove("blur");
    contenedorMensaje.classList.add("oculto");
    mensaje.classList.add("oculto");
}