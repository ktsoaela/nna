import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioDetailComponent,
    PortfolioHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
