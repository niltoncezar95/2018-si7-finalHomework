import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes : Cliente[] = [];

  constructor() { }

  addCliente(cliente : Cliente) {
    this.clientes.push(cliente);
  }

  getClientes() : Observable<Cliente[]> {
    return of(this.clientes);
  }

  updateCliente(cliente : Cliente) {
    let existCliente = this.clientes.find(cli => cli.id == cli.id);
    existCliente.nome = cliente.nome;
  }


}
