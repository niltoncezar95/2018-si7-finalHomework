import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { OsService } from '../os.service';
import { Os } from '../os';
import { Cliente } from '../../cliente/cliente';
import { ClienteService } from '../../cliente/cliente.service';
import { OssRelatorioComponent } from '../oss-relatorio/oss-relatorio.component';

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
  osRelatorioComponent: OssRelatorioComponent

  constructor(private route: ActivatedRoute, private location: Location) {
    this.id = this.route.snapshot.params['id']
    
  }

  ngOnInit() {
    this.loadClientes();
  }

  loadOs() {
    this.os = this.osService.getOs('os' + String(this.id))
    this.os.cliente = this.clienteService.getCliente('cliente'+this.os.cliente.id)
  }

  updateOs() {
    this.osService.updateOs(this.os);
    this.loadOs()
    window.alert("Alteração salva.")
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

  loadClientes() {
    this.loadOs();
    this.clientes = this.clienteService.getClientes()
  }

}
