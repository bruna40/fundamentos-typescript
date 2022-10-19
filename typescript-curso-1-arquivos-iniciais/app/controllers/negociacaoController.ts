import { DiaDaSemana } from "../enums/Days.js";
import { NegociacaoModel } from "../models/negociacaoModel.js";
import { NegociacoesModel } from "../models/negociacoesModel.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new NegociacoesModel();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private readonly SABADO = 6;
    private readonly DOMINGO = 0;

    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona():void {
        const negociacao = NegociacaoModel.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(this.ehDiaUtil(negociacao.data)) {
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
        } else {
            this.mensagemView.update('Negociações apenas em dias úteis!');
        }
    }


    private ehDiaUtil(data:Date):boolean {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }

    private limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }


    private atualizaView():void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

}
