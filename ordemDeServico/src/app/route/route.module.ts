import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { OsComponent } from '../os/os.component';
import { ClientesRelatorioComponent } from '../cliente/clientes-relatorio/clientes-relatorio.component';
import { OssRelatorioComponent } from '../os/oss-relatorio/oss-relatorio.component';


const routes : Routes = [
  { path : 'cliente', component : ClienteComponent },
  { path : 'clientes-relatorio', component : ClientesRelatorioComponent },
  { path : 'os', component : OsComponent },
  { path : 'oss-relatorio', component : OssRelatorioComponent }
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
