import { NegociacaoModel } from "../models/negociacaoModel.js";
import { NegociacoesModel } from "../models/negociacoesModel.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new NegociacoesModel();

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona():void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao():NegociacaoModel {
        const negociacao = new NegociacaoModel(
            new Date(this.inputData.value.replace(/-/g, ',')),
            Number(this.inputQuantidade.value),
            Number(this.inputValor.value)
        );

        return negociacao;

    }

    limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}
