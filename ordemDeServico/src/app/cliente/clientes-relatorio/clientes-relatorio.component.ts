import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes-relatorio',
  templateUrl: './clientes-relatorio.component.html',
  styleUrls: ['./clientes-relatorio.component.css']
})
export class ClientesRelatorioComponent implements OnInit {

  clientes: any;
  constructor(private clienteService: ClienteService
  ) { }

  ngOnInit() : void {
    this.clienteService.getClientes()
  }
  

}
