import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetComponent } from './meet/meet.component';
import { ClientesComponent } from './clientes/clientes.component';



const routes: Routes = [
  {path: 'meet', component: MeetComponent},
  {path: 'clientes', component: ClientesComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
