import { Component, OnInit } from '@angular/core';
import { Os } from '../os';
import { OsService } from '../os.service';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';

@Component({
  selector: 'app-oss-relatorio',
  templateUrl: './oss-relatorio.component.html',
  styleUrls: ['./oss-relatorio.component.css']
})
export class OssRelatorioComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteService: ClienteService;
  private osService = new OsService();
  os: Os;
  oss: Os[] = [];
  ossTemp: Os[] = [];

  constructor() { }

  ngOnInit() {
    this.loadOss();
  }

  removeOs(os: Os){
    this.oss.splice(this.oss.indexOf(os), 1);
    this.osService.removeOs(os);
    this.loadOss;
    console.log('passei aqui de novo')
  }

  loadOss() {
    this.oss = this.osService.getOss()
    this.loadOs();
  }

  loadOs() {
    let id = 0;
    for(let i=0; i<this.oss.length;i++){
        id = this.oss[i].id
        this.os = this.osService.getOs('os' + String(id))
        this.os.cliente = JSON.parse(localStorage.getItem('cliente'+this.os.cliente.id))
        this.ossTemp.push(this.os);
        console.log(this.os)
    }
    this.oss = this.ossTemp
  }


}

