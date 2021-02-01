import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { NewContactComponent } from './new-contact/new-contact.component';

const routes: Routes = [
  {path: '', component: ContatosComponent},
  {path: 'novo', component: NewContactComponent},
  {path: ':id', component: DetalhesContatoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
