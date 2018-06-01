import { Injectable } from '@angular/core';
import { Cliente } from '../cliente/cliente';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [];

  constructor() { }

  addCliente(id: string, cliente: Cliente) {
    var jsonAux = JSON.stringify(cliente);
    id.toString;
    window.localStorage.setItem(id, jsonAux);
  }

  getTamanhoLocalStorage(): Observable<Cliente[]> {
    console.log(localStorage.length);
    return of(this.clientes);

  }

  getCliente(key: string) {
    console.log(JSON.parse(localStorage.getItem(key)))
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  updateCliente(cliente: Cliente) {
    let existCliente = this.clientes.find(cli => cli.id == cli.id);
    existCliente.nome = cliente.nome;
  }

  getClientes(): Observable<Cliente[]> {
    var cont = localStorage.length;

    if (cont >= 0) {
      for (let i = 1; i <= cont; i++) {
        this.clientes.push(JSON.parse(localStorage.getItem(String(i))));
      }
    }
    console.log(this.clientes);
    return of(this.clientes);
  }

}