import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OsComponent } from './os/os.component';
import { RouteModule } from './route/route.module';
import { CepFilterPipe } from './cliente/cep-filter.pipe';
import { TelefoneFilterPipe } from './cliente/telefone-filter.pipe';
import { EstadoPipe } from './cliente/estado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    OsComponent,
    CepFilterPipe,
    TelefoneFilterPipe,
    EstadoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
