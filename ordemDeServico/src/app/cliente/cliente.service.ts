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

  getCliente(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  updateCliente(cliente: Cliente) {
    var jsonAux = JSON.stringify(cliente);
    window.localStorage.setItem('cliente' + cliente.id, jsonAux);
  }

  removeCliente(cliente: Cliente) {
    localStorage.removeItem('cliente' + cliente.id);
  }

  getClientes() {
    return Object.keys(localStorage).filter(function (key) {
      return key.indexOf('cliente') == 0;
    }).map(function (key) {
      return JSON.parse(localStorage[key]);
    });
  }
}