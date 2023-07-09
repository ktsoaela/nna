import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioHomeComponent } from './portfolio-home/portfolio-home.component';

const routes: Routes = [
  { path: 'portfolio-home', component: PortfolioHomeComponent },
  { path: 'portfolio-detail/:projectId', component: PortfolioDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
