import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OsComponent } from './os/os.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    OsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
