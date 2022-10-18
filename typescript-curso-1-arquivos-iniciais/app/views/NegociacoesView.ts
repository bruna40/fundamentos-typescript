import { NegociacoesModel } from "../models/negociacoesModel.js";

export class NegociacoesView {
    private element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    template(model: NegociacoesModel): string {
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
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
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

    update(model:NegociacoesModel): void {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}