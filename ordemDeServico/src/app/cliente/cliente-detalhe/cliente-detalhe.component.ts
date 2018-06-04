import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  private clienteService = new ClienteService();
  cliente: Cliente;
  id: string;

  constructor(private route: ActivatedRoute,  private location: Location) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.loadCliente();
  }

  updateCliente() {
    this.clienteService.updateCliente(this.cliente);
    window.alert("Alteração salva.")
    this.goBack();
  }

  loadCliente() {
    this.cliente = this.clienteService.getCliente('cliente' + String(this.id))
  }

  goBack(): void {
    this.location.back();
  }

}


