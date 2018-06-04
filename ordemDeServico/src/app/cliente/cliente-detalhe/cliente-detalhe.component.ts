import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']
   }

  ngOnInit() {
    
    this.loadCliente();
    
    // this.cliente = new Cliente(1, 'Nilton', 'niltoncezar95@gmail.com',
    //   '98978839', 'Rua ntonio Pereira Simões', 'Santa Cruz', 'Borda da Mata', 'MG');
    // this.route.params.forEach((params: Params) => {
    //   let id: number = +params['id'];
    //   this.loadCliente(String(id));
    // });
    //this.cliente = new Cliente(0, '', '', '');
  }

  onSubmit(): void {
    // console.log('Alterar contato');
    // this.clienteService.updateCliente(this.cliente);
  }

  loadCliente() {
    this.cliente = this.clienteService.getCliente('cliente'+String(this.id))
    console.log(this.cliente)
  }


}


