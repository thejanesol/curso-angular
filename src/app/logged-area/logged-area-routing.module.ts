import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { LoggedAreaComponent } from './logged-area.component';

const routes: Routes = [
   //pathmatch = indica qual tipo de rota considerar, nesse caso é a rota exata!
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: LoggedAreaComponent, children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
      { path: 'extrato', component: ExtratoComponent },
      { path: 'contatos', loadChildren: () => import('../logged-area/contatos/contatos.module').then(m => m.ContatosModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedAreaRoutingModule { }
