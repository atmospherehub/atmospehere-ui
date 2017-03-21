import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import * as Highcharts from 'highcharts';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule.forRoot(Highcharts)
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
