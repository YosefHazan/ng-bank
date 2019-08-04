import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { ActionComponent } from './pages/action/action.component';
import { ActionsSummaryComponent } from './pages/actions-summary/actions-summary.component';
import { NavComponent } from './comp/nav/nav.component';//step 12
import { AboutComponent } from './comp/about/about.component';
import { ActionDisplayItemComponent } from './comp/action-display-item/action-display-item.component';// step 12

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SummaryComponent,
    ActionComponent,
    ActionsSummaryComponent,
    NavComponent,//step 13
    AboutComponent, ActionDisplayItemComponent//step 13
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
