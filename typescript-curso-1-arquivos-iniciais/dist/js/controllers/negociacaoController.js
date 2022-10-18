import { NegociacaoModel } from "../models/negociacaoModel.js";
import { NegociacoesModel } from "../models/negociacoesModel.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new NegociacoesModel();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.lista();
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }
    criaNegociacao() {
        const negociacao = new NegociacaoModel(new Date(this.inputData.value.replace(/-/g, ',')), Number(this.inputQuantidade.value), Number(this.inputValor.value));
        return negociacao;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
