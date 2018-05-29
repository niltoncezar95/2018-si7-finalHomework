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

  clientes: Cliente[];

  showMessageError: boolean;

  constructor(private clienteService: ClienteService,
    private location: Location
  ) { }

  ngOnInit() {
    this.newCliente = new Cliente();
    this.showMessageError = false;
    this.loadClientes();
  }
  
  loadClientes() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  saveCliente() {
    console.log("Teste")
    if (!this.newCliente.nome || this.newCliente.nome.trim() == '') {
      this.showMessageError = true;
    } else {
      this.showMessageError = false;
      if (!this.newCliente.id) {
        this.newCliente.id = (new Date()).getTime();
        this.clienteService.addCliente(String(this.newCliente.id), this.newCliente);
      } else {
        this.clienteService.updateCliente(this.newCliente);
      }

      this.newCliente = new Cliente();
    }
    console.log(this.clientes)
  }

  goBack(): void {
    this.location.back();
  }
}