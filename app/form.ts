// import { validaPeso } from './imc.ts'


function obtemPacienteDoFormulario(form: HTMLFormElement){
    var paciente = {
        nome : form.nome.value,
        altura : form.altura.value,
        peso : form.peso.value,
        gordura : form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}




function montaTr(paciente: Paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}


function montaTd(dado: any, classe: string){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}


function validaPaciente(paciente: Paciente){
    var erros = [];
    if (paciente.nome.length ==0) erros.push("Nome não pode ser em branco");
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    if (paciente.gordura.toString().length==0) erros.push("A gordura não pode ser em branco");
    return erros;
}


function exibeMensagemDeErros(erros: string){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML="";
    if (Array.isArray(erros)) {
        erros.forEach(function(erro: any){
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li)
        });
    }
}


export function adicionaPacienteNaTabela(paciente: Paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}