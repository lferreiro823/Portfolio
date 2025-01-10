let btn = document.getElementById("btn-menu");
let menu = document.getElementById("menu")
let items = document.querySelectorAll("#menu a")
btn.addEventListener("click", toggleOculto
)
items.forEach(item => {
    item.addEventListener("click", toggleOculto)
});
function toggleOculto(){
    menu.classList.toggle("oculto");
}