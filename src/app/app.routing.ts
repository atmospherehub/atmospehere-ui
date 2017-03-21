import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);