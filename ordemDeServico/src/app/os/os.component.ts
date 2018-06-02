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
  idOs: number = 1;


  marcasEquip: Array<string> = ['Acer', 'Dell', 'HP', 'Lenovo', 'Positivo'];

 
  showMessageError: boolean;

  constructor(private osService: OsService, private location: Location) { }

  ngOnInit() {
    this.newOs = new Os();
    this.showMessageError = false;
    this.loadClientes();
  }

  saveOs() {
    console.log('TesteSaveOS')
    // if (!this.newOs.cliente || this.newOs.cliente.nome.trim() == '') {
    //   this.showMessageError = true;
    // } else {
     // this.showMessageError = false;
      // if (!this.newOs.id) {
        this.newOs.id = localStorage.length + 1;
        this.osService.addOs(String(this.newOs.id), this.newOs);
      // } else {
      //   this.osService.updateOs(this.newOs);
      // }

       this.newOs = new Os();
      // console.log(this.loadClientes);
    }
  //}

  loadClientes() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
    
  }
  
  goBack(): void {
    this.location.back();
  }

}
