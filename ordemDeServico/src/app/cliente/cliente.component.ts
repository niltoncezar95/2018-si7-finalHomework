import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Location } from '@angular/common';
import { ClienteService } from './cliente.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @ViewChild('name') inputElement: ElementRef;

  newCliente: Cliente;

  clientes: Cliente[] = [];

  showMessageError: boolean;

  constructor(private clienteService: ClienteService, private location: Location) { }

  ngOnInit() {
    this.newCliente = new Cliente();
    this.showMessageError = false;
    this.setFocus();
  }

  saveCliente() {
    if (!this.newCliente.nome || this.newCliente.nome.trim() == '') {
    } else {
      this.showMessageError = false;
      if (!this.newCliente.id) {
        this.newCliente.id = (new Date()).getTime();
        this.clienteService.addCliente(String(this.newCliente.id), this.newCliente);
      } else {
        this.clienteService.updateCliente(this.newCliente);
      }

      this.newCliente = new Cliente();
      this.setFocus();
    }
    window.alert('Cadastro de cliente realizado com sucesso!!')
    this.goBack();

  }

   setFocus() {
     this.inputElement.nativeElement.focus();
   }

  goBack(): void {
    this.location.back();
  }

  getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-group': true,
      'is-invalid': !isValid && !isPristine,
      'is-valid': isValid && !isPristine
    }
  }

  getFormControlClass(isValid: boolean, isPristine: boolean): {} {
    return {
      'form-control': true,
      'is-invalid': !isValid && !isPristine,
      'is-valid': isValid && !isPristine
    }
  }
}