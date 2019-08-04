import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ActionsSummaryComponent } from './pages/actions-summary/actions-summary.component';
import { AboutComponent } from './comp/about/about.component'; //step 7
import { from } from 'rxjs';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'about', component:AboutComponent},//step 8
  { path:'summary/:bankUserId', component:SummaryComponent},
  { path:'actions-summary/:bankAccoundId', component:ActionsSummaryComponent},



  { path:'',    redirectTo:'/login',  pathMatch: 'full'},
  { path:'**',  redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
