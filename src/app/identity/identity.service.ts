import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FacebookService, FacebookLoginResponse, FacebookAuthResponse, FacebookInitParams } from 'ng2-facebook-sdk';

@Injectable()
export class IdentityService {
    private _status: boolean;
    private _accessToken: string;

    constructor(private _router: Router, private fb: FacebookService) {
        const fbParams: FacebookInitParams = {
            appId: '456894917976275', ////'191703407989431', // 192324031260702
            xfbml: true,
            version: 'v2.8'
        };
        this.fb.init(fbParams);
    }

    getLoginStatus(): Promise<boolean> {
        const access_token = localStorage.getItem('FB_ACCESS_TOKEN');
        return this.fb.getLoginStatus().then((res) => {
            if (res.status === 'connected' && access_token) {
                return true;
            }
            else {
                return false;
            }
        });
    }

    loginUser(): Promise<boolean> {
        return this.fb.login({
            enable_profile_selector: true, // allow user to pick what profile to login with
            return_scopes: true, // returns the scopes that the user authorized
            scope: 'public_profile,user_friends,email,pages_show_list' // the scopes we want the user to authorize
        }).then(
            (response) => {
                localStorage.setItem('FB_ACCESS_TOKEN', response.authResponse.accessToken);
                return true;
            },
            (error: any) => console.error(error)
            );
    }

    api(): Promise<any> {
        const access_token = localStorage.getItem('FB_ACCESS_TOKEN');
        const fields = 'last_name,first_name,picture';
        return this.fb.api('/me', 'get', { fields: fields, access_token: access_token }).then((res) => {
            return res;
        });
    }

    logOut(): void {
        localStorage.removeItem('FB_ACCESS_TOKEN');
    }
}
