import { Paciente } from "../model/paciente";


export class TableController{

    private montaTr(paciente: Paciente): any{
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
        pacienteTr.appendChild(this.montaTd(paciente.nome, "info-nome"));
        pacienteTr.appendChild(this.montaTd(paciente.altura, "info-altura"));
        pacienteTr.appendChild(this.montaTd(paciente.peso, "info-peso"));
        pacienteTr.appendChild(this.montaTd(paciente.gordura, "info-gordura"));
        pacienteTr.appendChild(this.montaTd(paciente.imc, "info-imc"));
        
        return pacienteTr;
    }
    
    
    private montaTd(dado: any, classe: string){
        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);
        return td;
    }
    
    
    adicionaPacienteNaTabela(paciente: Paciente){
        var pacienteTr = this.montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        return pacienteTr
    }
} 