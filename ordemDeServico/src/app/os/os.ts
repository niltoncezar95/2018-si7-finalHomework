import { Cliente } from "../cliente/cliente"

export class Os {

    id: number;
    cliente: Cliente;
    equipamento: string;
    defeito: string;
    observacoes: string;

    constructor(id?: number, cliente?: Cliente,
        equipamento?: string, defeito?: string,
        observacoes?: string) {

        this.id = id;
        this.cliente = cliente;
        this.equipamento = equipamento;
        this.defeito = defeito;
        this.observacoes = observacoes;
    }

}