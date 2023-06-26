export class Demonstracao {
    public contas: Array<Conta> = []
}

export class Conta {
    public reference: string = "";
    public description: string = "";
    public valor: number = 0;
}