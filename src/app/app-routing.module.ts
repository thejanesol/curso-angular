import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsloggedGuard } from './shared/guards/islogged/islogged.guard';
import { IsnotloggedGuard } from './shared/guards/isnotlogged/isnotlogged.guard';


const routes: Routes = [
  {path: '',  loadChildren: () => import('./logged-area/logged-area.module').then(m => m.LoggedAreaModule), canActivate: [IsloggedGuard]},
  {path: 'login', component: LoginComponent, canActivate: [IsnotloggedGuard]},
  {path: '**', component: NotFoundComponent}, 
  //Alternativa para quando uma rota solicitada não existir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
