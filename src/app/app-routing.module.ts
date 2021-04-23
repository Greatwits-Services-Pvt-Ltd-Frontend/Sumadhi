import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './company/aboutus/aboutus.component';
import { ContactusComponent } from './company/contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';

import { Service1Component } from './service/service1/service1.component';
import { Service2Component } from './service/service2/service2.component';
import { Service3Component } from './service/service3/service3.component';
import { Solution1Component } from './solutions/solution1/solution1.component';
import { Solution2Component } from './solutions/solution2/solution2.component';
import { Solution3Component } from './solutions/solution3/solution3.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [

{
  component:Service1Component,
  path:"service1"
},
{
  component:Service2Component,
  path:"service2"
},
{
  component:Service3Component,
  path:"service3"
},
{
  component:AboutusComponent,
  path:"aboutus"
},
{
  component:ContactusComponent,
  path:"contactus"
},
{
  component:HomepageComponent,
  path:"homepage"
},
{
  component:SupportComponent,
  path:"support"
},
{
  component:Solution1Component,
  path:"solution1"
},
{
  component:Solution2Component,
  path:"solution2"
},
{
  component:Solution3Component,
  path:"solution3"
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
