import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-highcharts';
import * as Highcharts from 'highcharts';
import * as HighchartsMore from 'highcharts/highcharts-more';
import { DashboardComponent } from './dashboard.component';
import { WeeklyAverageChartComponent } from '../weekly-average-chart/weekly-average-chart.component';
import { DailyAverageChartComponent } from '../daily-average-chart/daily-average-chart.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ChartModule.forRoot(Highcharts, HighchartsMore),
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    WeeklyAverageChartComponent,
    DailyAverageChartComponent
  ]
})
export class DashboardModule { }
