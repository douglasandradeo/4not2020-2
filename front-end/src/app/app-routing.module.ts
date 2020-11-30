import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoListComponent } from './evento/evento-list/evento-list.component';
import { EventoFormComponent } from './evento/evento-form/evento-form.component';


const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra
    { path: 'evento', component: EventoListComponent },
    { path: 'evento/novo', component: EventoFormComponent },
    { path: 'evento/:id', component: EventoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
