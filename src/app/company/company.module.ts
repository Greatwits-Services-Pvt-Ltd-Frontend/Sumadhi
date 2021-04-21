import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PatnersComponent } from './patners/patners.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AboutusComponent,
    ContactusComponent,
    PatnersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    AboutusComponent,
    ContactusComponent,
    PatnersComponent
  ]
})
export class CompanyModule { }
