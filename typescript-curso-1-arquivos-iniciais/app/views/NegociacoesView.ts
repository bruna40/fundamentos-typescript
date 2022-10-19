import { NegociacoesModel } from "../models/negociacoesModel.js";
import { View } from "./View.js";

export class NegociacoesView extends View<NegociacoesModel> {

    protected template(model: NegociacoesModel): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `
                        <tr>
                            <td>${this.formatar(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>R$ ${negociacao.valor}</td>
                            <td>R$ ${negociacao.volume}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    private formatar(data: Date): string {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

}