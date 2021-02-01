import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { NewContactComponent } from './new-contact/new-contact.component';


@NgModule({
  declarations: [
    DetalhesContatoComponent,
    ContatosComponent,
    NewContactComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContatosModule { }
