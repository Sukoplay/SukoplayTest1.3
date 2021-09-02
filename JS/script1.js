document.querySelector("svg").addEventListener("click", tourne);

function tourne(){
    document.querySelector("svg").classList.toggle("flechette")

    document.querySelector(".MenuAvant").classList.toggle("MenuApres")
}

console.log(document.querySelector(".fleche"))


document.querySelector(".twitter").addEventListener("click", twite)

function twite(){
    this.classList.toggle("twitter2")
    document.querySelector(".twitt").classList.toggle("twitt2")
}



 



function notif(){
    let donner = document.querySelector("iframe").contentDocument.children[0].children[1].querySelector("li");

    if(donner == document.querySelector("iframe").contentDocument.children[0].children[1].querySelector("li")){
        console.log("ok")
    }
    else{
        console.log(error)
    }
}

//iframe.addEventListener("load", notif)
function notif(){
    console.log(document.querySelector("iframe").contentWindow.document.children[0].children[1].querySelector("li"))
}

document.querySelector("main>a").addEventListener("click", ouverture)

function ouverture(){
    document.querySelector("main>a").classList.add("changeUp")
    document.querySelector(".imageFond").classList.add("imageFond2")
    document.querySelector(".close2").classList.remove("close")
}
document.querySelector(".close2").addEventListener("click", fermeture)

function fermeture(){
    document.querySelector("main>a").classList.remove("changeUp")
    document.querySelector(".imageFond").classList.remove("imageFond2")
    document.querySelector(".close2").classList.add("close")
}



 console.log(document.querySelector("div>img"))