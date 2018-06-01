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

  getCliente(key: string) {
    console.log(JSON.parse(localStorage.getItem(key)))
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
  getTamanhoLocalStorage(): Observable<Cliente[]> {
    console.log(localStorage.length);
    return of(this.clientes);

  }
  // getClientes(): Observable<Cliente[]> {
  //   console.log(localStorage.length);
  //   return of(this.clientes);

  // }

  updateCliente(cliente: Cliente) {
    let existCliente = this.clientes.find(cli => cli.id == cli.id);
    existCliente.nome = cliente.nome;
  }

  getClientes(): Observable<Cliente[]> {
    var cont = localStorage.length;
    //pegando todos os dados da lista através de um loop e criando a tabela
    if (cont >= 1) {
      for (let i = 1; i <= cont; i++) {
        this.clientes.push(JSON.parse(localStorage.getItem(String(i))));
      }
    }
    console.log(this.clientes);
    return of(this.clientes);
  }

  //   var lista = localStorage.getItem('1527627120721');
  //   //pegando todos os dados da lista através de um loop e criando a tabela
  //   if(lista.length >= 1){
  //     for (let i = 0; i < lista.length; i++) {  
  //         console.log(lista)
  //       }
  //     }

  //     return of(this.clientes);
  // }

}