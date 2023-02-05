
import {Paciente} from '../model/paciente.js'

export class PacienteController {
    form: HTMLFormElement

    constructor(form: HTMLFormElement) {
        this.form = form
    }

    private exibeMensagemDeErros(erros: Array<string>) {
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = "";
        if (Array.isArray(erros)) {
            erros.forEach(function (erro: any) {
                var li = document.createElement("li");
                li.textContent = erro;
                ul.appendChild(li);
            });
        }
        return;
    }

    private validaPeso(peso: number): boolean {
        if (peso > 0 && peso < 1000) {
            return true;
        } else {
            return false;

        }
    }

    private validaAltura(altura: number): boolean {
        if (altura > 0 && altura <= 3.00) {
            return true;
        } else {
            return false;
        }
    }

    private monta_paciente(): Paciente {

        var paciente = new Paciente(
            this.form.nome.value,
            this.form.peso.value,
            this.form.altura.value,
            this.form.gordura.value
        )
        return paciente
    }

    validaPaciente(): Paciente {

        var erros = [];
        if (this.form.nome.value.length == 0) erros.push("Nome não pode ser em branco");
        if (!this.validaPeso(this.form.peso.value)) erros.push("Peso é inválido");
        if (!this.validaAltura(this.form.altura.value)) erros.push("Altura é inválida");
        if (this.form.gordura.value.toString().length == 0) erros.push("A gordura não pode ser em branco");
        if (erros.length > 0) {
            this.exibeMensagemDeErros(erros);
            return
        }
        return this.monta_paciente()
    }
}