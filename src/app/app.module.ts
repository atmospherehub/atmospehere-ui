import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import { FacebookService } from 'ng2-facebook-sdk';
import { IdentityService } from './identity/identity.service';
import { IdentityActivateService } from './identity/identity-activate.service';
import { WelcomeComponent } from 'app/welcome/welcome.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

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
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // TODO: what is pathMatch?
      { path: 'welcome', component: WelcomeComponent },
    ], { useHash: false }),
    LoginModule,
    Ng2PageScrollModule.forRoot()

  ],
  providers: [FacebookService, IdentityService, IdentityActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
