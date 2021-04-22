import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomepageModule } from './homepage/homepage.module';
import { ServiceModule } from './service/service.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyModule } from './company/company.module';
import { SolutionsModule } from './solutions/solutions.module';
import { FooterModule } from './footer/footer.module';
import { SupportModule } from './support/support.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HomepageModule,
    HeaderModule,
    ServiceModule,
    BrowserAnimationsModule,
    NgbModule,
    CompanyModule,
    SolutionsModule,
    FooterModule,
    SupportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }








