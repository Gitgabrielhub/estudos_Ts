import { Negociacao } from "../models/negociacao.js";

 export class negociacaoController{
    private inputData:HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor:HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = document.querySelector('#quantidade')
        this.inputValor = document.querySelector('#valor')
    }
    adiciona():void{
        const negociacao = this.CriarNegociacao()
        console.log(negociacao)
        this.limparFormulario()
    }
    CriarNegociacao():Negociacao{
        const regex= /-/g;
        const date = new Date(this.inputData.value.replace(regex, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new Negociacao(date,quantidade,valor);
        
    }
    limparFormulario():void{
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus();
    }
} 