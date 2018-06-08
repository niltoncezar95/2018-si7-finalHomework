import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Os } from './os';
import { OsService } from './os.service';
import { ClientesRelatorioComponent } from '../cliente/clientes-relatorio/clientes-relatorio.component';
import { ClienteService } from '../cliente/cliente.service';
import { Cliente } from '../cliente/cliente';

@Component({
  selector: 'app-os',
  templateUrl: './os.component.html',
  styleUrls: ['./os.component.css']
})
export class OsComponent implements OnInit {
  newOs: Os;

  clientes: Cliente[] = [];
  clienteService = new ClienteService();

  marcasEquip = ['Acer','Asus','Dell','HP','Lenovo','Positivo'];

  showMessageError: boolean;

  constructor(private osService: OsService, private location: Location) { }

  ngOnInit() {
    this.newOs = new Os();
    this.showMessageError = false;
    this.loadClientes();
  }

  saveOs() {
    if (!this.newOs.cliente) {
      window.alert("Escolha um cliente.")
    } else {
      this.showMessageError = false;
      if (!this.newOs.id) {
        this.newOs.id = (new Date()).getTime();
        this.osService.addOs(String(this.newOs.id), this.newOs);
      } else {
        this.osService.updateOs(this.newOs);
      }

      this.newOs = new Os();
    }
    window.alert('Cadastro de OS realizado com sucesso!!')
  }

  loadClientes() {
    this.clientes = this.clienteService.getClientes()
  }

  goBack(): void {
    this.location.back();
  }

}
