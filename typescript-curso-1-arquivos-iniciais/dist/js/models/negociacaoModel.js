export class NegociacaoModel {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const negociacao = new NegociacaoModel(new Date(dataString.replace(/-/g, ',')), Number(quantidadeString), Number(valorString));
        return negociacao;
    }
}
