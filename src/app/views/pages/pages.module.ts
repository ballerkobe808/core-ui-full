
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
 
// import { BrowserModule } from '@angular/platform-browser';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [ 
    PagesRoutingModule,
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ]
})
export class PagesModule { }
