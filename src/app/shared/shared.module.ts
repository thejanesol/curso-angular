import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthInterceptor } from './interceptors/auth.interceptor';

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
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true 
  }]
})
export class SharedModule { }
