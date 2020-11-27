import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoListComponent } from './evento/evento-list/evento-list.component';

const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra
    { path: 'evento', component: EventoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
