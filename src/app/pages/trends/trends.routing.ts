import { Routes, RouterModule }  from '@angular/router';
import { TrendsComponent } from './trends.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: TrendsComponent,
    children: [
      // { path: 'chartist-js', component: ChartistJs }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
