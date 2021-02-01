import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsloggedGuard } from './shared/guards/islogged/islogged.guard';
import { IsnotloggedGuard } from './shared/guards/isnotlogged/isnotlogged.guard';


const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [IsloggedGuard]},
  {path: 'login', component: LoginComponent, canActivate: [IsnotloggedGuard]},
  {path: 'extrato', component: ExtratoComponent, canActivate: [IsloggedGuard]},
  {path: 'contatos', loadChildren: () => import('./contatos/contatos.module').then(m => m.ContatosModule), canActivate: [IsloggedGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  //pathmatch = indica qual tipo de rota considerar, nesse caso é a rota exata!
  {path: '**', component: NotFoundComponent}, 
  //Alternativa para quando uma rota solicitada não existir
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
