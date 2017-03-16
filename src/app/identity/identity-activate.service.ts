import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'
import { IdentityService } from './identity.service';

@Injectable()
export class IdentityActivateService implements CanActivate {
    private _status: boolean;

    constructor(private _router: Router, private _identityService: IdentityService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this._identityService.getLoginStatus().then((status: boolean) => {
            if (!status) {
                var redirect = `?redirect=${state.url}`;
                window.location.href = `/loginsdk${redirect}`
            }
            return status
        })
    }
}