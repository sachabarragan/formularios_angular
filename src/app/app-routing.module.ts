import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaMotosComponent } from './components/lista-motos/lista-motos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bikes' },
  { path: 'new', component: FormularioComponent },
  { path: 'bikes', component: ListaMotosComponent },
  { path: '**', redirectTo: '/bikes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
