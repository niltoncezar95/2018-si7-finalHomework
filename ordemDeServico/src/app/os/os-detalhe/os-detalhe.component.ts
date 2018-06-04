import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OsService } from '../os.service';
import { Os } from '../os';
import { Cliente } from '../../cliente/cliente';
import { ClienteService } from '../../cliente/cliente.service';
import { RSA_SSLV23_PADDING } from 'constants';

@Component({
  selector: 'app-os-detalhe',
  templateUrl: './os-detalhe.component.html',
  styleUrls: ['./os-detalhe.component.css']
})
export class OsDetalheComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteService = new ClienteService();
  private osService = new OsService();
  os: Os;
  id: number;
  marcasEquip = ['Acer','Asus','Dell','HP','Lenovo','Positivo'];

  constructor(private route: ActivatedRoute, private location: Location) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.loadOs();
    this.loadClientes();
  }

  loadOs() {
    this.os = this.osService.getOs('os' + String(this.id))
  }

  saveOs() {
    this.osService.updateOs(this.os);
    window.alert("Alteração salva.")
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  loadClientes() {
    this.clientes = this.clienteService.getClientes()
  }

}
