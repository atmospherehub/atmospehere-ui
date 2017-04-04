import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdentityActivateService } from 'app/identity/identity-activate.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent } ,
    { path: 'dashboard', component: DashboardComponent, canActivate: [IdentityActivateService] }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });
