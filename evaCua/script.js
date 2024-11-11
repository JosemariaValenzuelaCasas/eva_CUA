const logo=document.getElementById("logo");
const barra=document.querySelector(".barra-lateral")
const spans =document.querySelectorAll("span")
const main =document.querySelector("main")

logo.addEventListener("click",()=>{
    barra.classList.toggle("min-barra")
    main.classList.toggle("oculto")
    spans.forEach((spans)=>{
        spans.classList.toggle("oculto")
    })
})