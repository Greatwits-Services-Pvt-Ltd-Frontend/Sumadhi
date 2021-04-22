import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SupportComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    SupportComponent
  ]
})
export class SupportModule { }
