import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OsComponent } from './os/os.component';
import { RouteModule } from './route/route.module';
import { CepFilterPipe } from './cliente/cep-filter.pipe';
import { TelefoneFilterPipe } from './cliente/telefone-filter.pipe';
import { EstadoPipe } from './cliente/estado.pipe';
import { ClientesRelatorioComponent } from './cliente/clientes-relatorio/clientes-relatorio.component';
import { OssRelatorioComponent } from './os/oss-relatorio/oss-relatorio.component';
import { ClienteDetalheComponent } from './cliente/cliente-detalhe/cliente-detalhe.component';
import { OsDetalheComponent } from './os/os-detalhe/os-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    OsComponent,
    CepFilterPipe,
    TelefoneFilterPipe,
    EstadoPipe,
    ClientesRelatorioComponent,
    OssRelatorioComponent,
    ClienteDetalheComponent,
    OsDetalheComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
