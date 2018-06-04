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
    window.localStorage.setItem('cliente' + id, jsonAux);
  }

  getTamanhoLocalStorage(): Observable<Cliente[]> {
    console.log(localStorage.length);
    return of(this.clientes);

  }

  getCliente(key: string) {
      return JSON.parse(localStorage.getItem(key));
  }

  updateCliente(cliente: Cliente) {
    let existCliente = this.clientes.find(cli => cli.id == cli.id);
    existCliente.nome = cliente.nome;
  }

  removeCliente(cliente: Cliente){ 
    localStorage.removeItem('cliente' + cliente.id);
  }

  getClientes() {
    return Object.keys(localStorage).filter(function(key) {
        return key.indexOf('cliente') == 0;
    }).map(function(key) {
        return JSON.parse(localStorage[key]);
    });
  }
}