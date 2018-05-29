export class Cliente {

    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;

    constructor(id?: number, nome?: string,
        email?: string, telefone?: string, endereco?: string,
        bairro?: string, cidade?: string, estado?: string
    ) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

}