import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service1Component } from './service1/service1.component';
import { Service2Component } from './service2/service2.component';
import { Service3Component } from './service3/service3.component';
import { AppRoutingModule } from '../app-routing.module';
// import { AppRoutingModule } from '../app-routing.module';
// import { Service1Component } from './service1/service1.component';
// import { Service2Component } from './service2/service2.component';
// import { Service3Component } from './service3/service3.component';



@NgModule({
  declarations: [
    Service1Component,
    Service2Component,
    Service3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    Service1Component,
    Service2Component,
    Service3Component
  ]
})
export class ServiceModule { }
