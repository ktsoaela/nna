import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Custom Components
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectService } from './projects/project.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
