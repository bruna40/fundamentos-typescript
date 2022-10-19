export class NegociacaoModel {

    constructor(
        private _data:Date,
        public readonly quantidade:number,
        public readonly valor:number
    ) {} 

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString:string, valorString:string): NegociacaoModel {
        const negociacao = new NegociacaoModel(
            new Date(dataString.replace(/-/g, ',')),
            Number(quantidadeString),
            Number(valorString)
        );

        return negociacao;

    }
}
