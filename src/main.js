let inputMessage = document.getElementById("submit")

console.log(inputMessage)

function sendMessage() {
    console.log("Preparando Envio...")
}


oninput = function () {
    if (localStorage.getItem("idName")) {
        let name = localStorage.getItem("idName")
        let idName = document.getElementById("idName")
        idName.innerHTML = name;
    }
    if (localStorage.getItem("idAdress")) {
        let name = localStorage.getItem("idAdress")
        let idName = document.getElementById("idAdress")
        idName.innerHTML = name;
    }
}

function clickSave(element) {
    let name = element.value;
    console.log(name)
    let idName = document.getElementById("idName");
    idName.innerHTML = name;
    localStorage.setItem("idName", name)
}

function clickSave1(element) {
    let name = element.value;
    console.log(name)
    let idAdress = document.getElementById("idAdress");
    idAdress.innerHTML = name;
    localStorage.setItem("idAdress", name)
}

