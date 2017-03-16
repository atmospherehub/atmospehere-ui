import { Component } from '@angular/core';
import { IdentityService } from "app/identity/identity.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _identityService: IdentityService, private _router: Router) {
  }

  onFacebookLoginClick(): void {
    var param = this._router.parseUrl(this._router.url).queryParams["redirect"] || '/';
    this._identityService.loginUser().then(
      (response) => {
        // this._router.navigate([`${param}`])
        window.location.href = `${param}`
        console.log(response)
      },
      (error: any) => console.error(error)
    );
  }
}