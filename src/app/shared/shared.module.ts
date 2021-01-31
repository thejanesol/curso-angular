import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from '../not-found/not-found.component';
import { ExercicioContadorComponent } from './components/exercicio-contador/exercicio-contador.component';
import { ExercicioDataBindingComponent } from './components/exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioNgclassComponent } from './components/exercicio-ngclass/exercicio-ngclass.component';
import { ExercicioPipesComponent } from './components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExercicioDiretivasComponent,
    ExercicioDataBindingComponent,
    ExercicioContadorComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule //precisou ser importado para funcionamento da navbar
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExercicioDiretivasComponent,
    ExercicioDataBindingComponent,
    ExercicioContadorComponent,
    ExercicioNgclassComponent,
    ExercicioPipesComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
