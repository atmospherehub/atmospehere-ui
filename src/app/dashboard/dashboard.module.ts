import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { DashboardComponent } from './dashboard.component';
import { WeeklyAverageChartComponent } from '../weekly-average-chart/weekly-average-chart.component';
import { DailyAverageChartComponent } from '../daily-average-chart/daily-average-chart.component';
import { MaterialModule } from '@angular/material';

// http://stackoverflow.com/questions/42636948/angular-2-aot-calling-function-chartmodule-function-calls-not-supported
declare var require: any;
export function highchartsFactory() {
  const hc = require('highcharts');
  const hcm = require('highcharts/highcharts-more');
  hcm(hc);
  return hc;
}

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    WeeklyAverageChartComponent,
    DailyAverageChartComponent
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
})
export class DashboardModule { }
