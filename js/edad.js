let span = document.getElementById("edad");
const hoy = new Date();
const nacimiento = new Date('2000-05-23');
let edad = hoy.getFullYear() - nacimiento.getFullYear();
const mes = hoy.getMonth() - nacimiento.getMonth();
if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
}
span.innerText = edad;