const titulo_pagina = document.querySelector(".titulo");
const pacientes = document.querySelectorAll(".paciente")
const filtroPacientes = document.getElementById("filtra-tabela")!
const tabelaPacientes = document.getElementById("table")!;
const botaoBuscarPaciente = document.querySelector("#buscar-pacientes");
const botaoAdicionaPaciente = document.getElementById("adicionar-paciente")

import {PacienteController} from './controller/pacienteController.js'
import { TableController } from './controller/tableController.js';


titulo_pagina.textContent = "Aparecida Nutricionista";


botaoBuscarPaciente.addEventListener("click", function(event){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    xhr.send();
    xhr.addEventListener("load", function(){
        var responsta:string  = xhr.responseText;
        var paciente = JSON.parse(responsta)
        var tableController = new TableController()
        tableController.adicionaPacienteNaTabela(paciente)
    })
    event.preventDefault();
})



tabelaPacientes.addEventListener("dblclick", function(event){
    var elementoAlvo  = event.target as Element;
    var paiDoAlvo = elementoAlvo.parentNode as Element;
    paiDoAlvo.classList.add("fadeOut")
    setTimeout( function(){
        paiDoAlvo.remove();
    },500)
})


filtroPacientes.addEventListener("input", () =>{
    var value = (filtroPacientes as HTMLInputElement).value;
    var pacientes = document.querySelectorAll(".paciente");
    if (value.length > 0){
        for (var i:number=0 ; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(value,"i");
            if (!expressao.test(nome)){
                paciente.classList.add("invisible")
            }
            else{
                paciente.classList.remove("invisible")
            }
        }
    }
    else{
        for (let index:number = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            paciente.classList.remove("invisible")
            
        }
    }
    
})


botaoAdicionaPaciente.addEventListener("click", function(event){
        event.preventDefault();
        var form: HTMLFormElement = document.querySelector("#form-adiciona");
        
        var paciente = new PacienteController(form).validaPaciente()
        if (paciente){
            var tableController = new TableController()
            tableController.adicionaPacienteNaTabela(paciente)
            form.reset();
            
            var msg = document.querySelector("#mensagens-erro");
            msg.textContent = ""
        }

    })
