export class Cliente {

    nome : string;
    email : string;
    telefone: string;
    endereco : string;
    bairro: string;
    cidade: string;
    estado: string;

    constructor(nome?: string, email?: string,
        telefone?: string, endereco?: string, 
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