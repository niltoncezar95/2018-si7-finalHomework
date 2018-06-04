import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { OsComponent } from '../os/os.component';
import { ClientesRelatorioComponent } from '../cliente/clientes-relatorio/clientes-relatorio.component';
import { OssRelatorioComponent } from '../os/oss-relatorio/oss-relatorio.component';
import { ClienteDetalheComponent } from '../cliente/cliente-detalhe/cliente-detalhe.component';
import { OsDetalheComponent } from '../os/os-detalhe/os-detalhe.component';


const routes : Routes = [
  { path : 'cliente', component : ClienteComponent },
  { path : 'cliente-detalhe', component : ClienteDetalheComponent },
  { path : 'clientes-relatorio', component : ClientesRelatorioComponent },
  { path : 'os', component : OsComponent },
  { path : 'os-detalhe', component : OsDetalheComponent },
  { path : 'oss-relatorio', component : OssRelatorioComponent },
  { path: 'cliente-detalhe/:id',component: ClienteDetalheComponent }
];

@NgModule({
  exports : [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RouteModule { }
