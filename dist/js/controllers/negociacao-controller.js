import { Negociacao } from "../models/negociacao.js";
export class negociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.CriarNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    CriarNegociacao() {
        const regex = /-/g;
        const date = new Date(this.inputData.value.replace(regex, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}