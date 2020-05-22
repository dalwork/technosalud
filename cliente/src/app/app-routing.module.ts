import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PersonasListComponent} from './components/personas-list/personas-list.component';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },{
    path: 'personas',
    component: PersonasListComponent
  },{
      path: 'personas/adicionar',
      component: PersonasFormComponent
  },{
    path: 'personas/actualizar/:id',
    component: PersonasFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
