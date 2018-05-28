import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClienteComponent } from './cliente/cliente.component';
import { OsComponent } from './os/os.component';
import { RouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    OsComponent
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
