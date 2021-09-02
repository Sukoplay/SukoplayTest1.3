document.querySelector("svg").addEventListener("click", tourne);

function tourne(){
    document.querySelector("svg").classList.toggle("flechette")

    document.querySelector(".MenuAvant").classList.toggle("MenuApres")
}



