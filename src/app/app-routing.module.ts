import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaReproduccionesComponent } from './lista-reproducciones/lista-reproducciones.component';

const routes: Routes = [
  {path : 'PlayList', component:ListaReproduccionesComponent},
  {path: '', redirectTo: 'PlayList', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
