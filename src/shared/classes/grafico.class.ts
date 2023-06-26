export class Grafico {
    public indices: Array<Indice> = []
}

export class Indice {
    public medicoes: Array<Medicao> = []
}

export class Medicao {
    public periodo: Date = new Date();
    public valor: number = 0
}