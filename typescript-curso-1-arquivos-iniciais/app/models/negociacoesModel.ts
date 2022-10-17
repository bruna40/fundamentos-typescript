import { NegociacaoModel } from "./negociacaoModel.js";

export class NegociacoesModel {

    private negociacoes: Array<NegociacaoModel> = [];

    adiciona(negociacao: NegociacaoModel) {
        this.negociacoes.push(negociacao);
    }
    

    lista(): Array<NegociacaoModel> {
        return this.negociacoes;
    }

}