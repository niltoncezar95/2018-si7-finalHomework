import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  newCliente: Cliente;

  clientes: Cliente[] = [];
  idCliente: number = 1;

  showMessageError: boolean;

  constructor(private clienteService: ClienteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.newCliente = new Cliente();
    this.showMessageError = false;
  }
  
  saveCliente() {
    if (!this.newCliente.nome || this.newCliente.nome.trim() == '') {
      this.showMessageError = true;
    } else {
      this.showMessageError = false;
      if (!this.newCliente.id) {
        this.newCliente.id = localStorage.length+1;
        this.clienteService.addCliente(String(this.newCliente.id), this.newCliente);
      } else {
        this.clienteService.updateCliente(this.newCliente);
      }

      this.newCliente = new Cliente();
    }
  }

  goBack(): void {
    this.location.back();
  }
}