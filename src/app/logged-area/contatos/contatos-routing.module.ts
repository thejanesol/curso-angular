import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

const routes: Routes = [
  {path: '', component: ContatosComponent},
  {path: 'novo', component: EditContactComponent},
  {path: ':id', component: DetalhesContatoComponent},
  {path: ':id/editar', component: EditContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
