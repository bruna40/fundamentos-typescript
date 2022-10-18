import { NegociacaoModel } from "./negociacaoModel.js";

export class NegociacoesModel {

    private negociacoes: NegociacaoModel[] = [];

    adiciona(negociacao: NegociacaoModel) {
        this.negociacoes.push(negociacao);
    }
    

    lista(): readonly NegociacaoModel[] {
        return this.negociacoes;
    }

}