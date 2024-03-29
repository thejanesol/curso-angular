import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoggedAreaRoutingModule } from './logged-area-routing.module';
import { LoggedAreaComponent } from './logged-area.component';


@NgModule({
  declarations: [LoggedAreaComponent],
  imports: [
    CommonModule,
    LoggedAreaRoutingModule,
    SharedModule
  ]
})
export class LoggedAreaModule { }
