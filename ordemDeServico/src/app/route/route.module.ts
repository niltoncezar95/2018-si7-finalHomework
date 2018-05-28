import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from '../cliente/cliente.component';
import { OsComponent } from '../os/os.component';


const routes : Routes = [
  { path : 'cliente', component : ClienteComponent },
  { path : 'os', component : OsComponent }
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
