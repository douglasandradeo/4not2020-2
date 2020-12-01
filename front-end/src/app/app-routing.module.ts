import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventoListComponent } from './evento/evento-list/evento-list.component';
import { EventoFormComponent } from './evento/evento-form/evento-form.component';
import { SetorListComponent } from './setor/setor-list/setor-list.component';
import { SetorFormComponent } from './setor/setor-form/setor-form.component';
import { SubsetorFormComponent } from './subsetor/subsetor-form/subsetor-form.component';
import { SubsetorListComponent } from './subsetor/subsetor-list/subsetor-list.component';


const routes: Routes = [
    // Nomes de rota no Angular (path) NÃO começam com uma barra
    { path: 'evento', component: EventoListComponent },
    { path: 'evento/novo', component: EventoFormComponent },
    { path: 'evento/:id', component: EventoFormComponent },

    { path: 'setor', component: SetorListComponent },
    { path: 'setor/novo', component: SetorFormComponent },
    { path: 'setor/:id', component: SetorFormComponent },

    { path: 'subsetor', component: SubsetorListComponent },
    { path: 'subsetor/novo', component: SubsetorFormComponent },
    { path: 'subsetor/:id', component: SubsetorFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
