



function calculaImc(peso: number, altura: number){
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(2);
}


function validaPeso(peso: number){
    if (peso>=0 && peso<1000){
        return true
    }else{
        return false

    }
}

function validaAltura(altura: number){
    if (altura>=0 && altura <=3.00){
        return true
    }else{
        return false
    }
}