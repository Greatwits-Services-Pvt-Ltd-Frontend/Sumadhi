import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModalWindow } from '@ng-bootstrap/ng-bootstrap/modal/modal-window';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatGridListModule } from "@angular/material/grid-list";




@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    NgbModule
    // NgbModalWindow
    
  ],
  exports:[
    HomepageComponent
  ]

})
export class HomepageModule { }
