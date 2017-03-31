import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { FacebookService } from 'ng2-facebook-sdk';
import { IdentityService } from './identity/identity.service';
import { IdentityActivateService } from './identity/identity-activate.service';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
// import { DashboardModule } from './dashboard/dashboard.module';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    LoginModule,
    Ng2PageScrollModule.forRoot(),
    // DashboardModule
  ],
  providers: [FacebookService, IdentityService, IdentityActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
