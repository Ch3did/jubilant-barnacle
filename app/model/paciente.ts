
export class Paciente{
    nome: string;
    peso: number;
    altura: number;
    gordura: number;
    imc: string;

    constructor(nome: string, peso: number, altura: number, gordura:number){
        this.nome = nome,
        this.peso = peso,
        this.altura = altura,
        this.gordura = gordura,
        this.imc = this.calculaImc(this.peso, this.altura)
    }

    
    calculaImc(peso: number, altura: number): string{
        var imc = 0;
        imc = peso/(altura * altura);
        return imc.toFixed(2);
    }

}
