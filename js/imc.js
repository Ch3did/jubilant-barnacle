var texto = document.querySelector(".titulo");
texto.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente")


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent


    var pesoIsValid = validaPeso(peso)
    var alturaIsValid = validaAltura(altura)
    var tdImc = paciente.querySelector(".info-imc")


    if (!pesoIsValid) {
        console.log("Peso Inválido")
        pesoIsValid = false
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido")
    }

    if (!alturaIsValid) {
        console.log("Altura Inválida")
        alturaIsValid = false
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("paciente-invalido")
    }


    if (pesoIsValid && alturaIsValid) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2)
    }
}


function calculaImc(peso, altura){
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso>=0 && peso<1000){
        return true
    }else{
        return false

    }
}

function validaAltura(altura){
    if (altura>=0 && altura <=3.00){
        return true
    }else{
        return false
    }
}