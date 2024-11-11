const cloud = document.getElementById("cloud");
const barraLateral = document.querySelector(".barra-lateral")
const spans = document.querySelectorAll("span");
const modoOscuro = document.getElementById("modo-oscuro")
const palanca = document.querySelector(".switch")
const circulo = document.querySelector(".circulo");

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("dark-mode");
    circulo.classList.toggle("prendido");
})
cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral");
    modoOscuro.classList.toggle("mini-modo-oscuro");

    spans.forEach((spans)=>{
        spans.classList.toggle("oculto")
        
    })
    
})

function scrollToSection(event, id) {
    event.preventDefault();  // Evita el comportamiento predeterminado del enlace
    const section = document.getElementById(id);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"  // Desplazamiento suave
    });
}