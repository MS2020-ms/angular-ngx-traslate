import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { HomeComponent } from './home/home.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [HomeComponent],
  //importar TranslateModule
  imports: [
    CommonModule,
    TaskRoutingModule,
    TranslateModule
  ]
})
export class TaskModule { }
