import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from "./login/login.module";

import { FacebookService } from 'ng2-facebook-sdk';
import { IdentityService } from './identity/identity.service';
import { IdentityActivateService } from './identity/identity-activate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, //TODO: what is pathMatch? 
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ], { useHash: false }),
    LoginModule

  ],
  providers: [FacebookService, IdentityService, IdentityActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
