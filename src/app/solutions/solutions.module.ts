import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Solution1Component } from './solution1/solution1.component';
import { Solution2Component } from './solution2/solution2.component';
import { Solution3Component } from './solution3/solution3.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    Solution1Component,
    Solution2Component,
    Solution3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    Solution1Component,
    Solution2Component,
    Solution3Component
  ]
})
export class SolutionsModule { }
