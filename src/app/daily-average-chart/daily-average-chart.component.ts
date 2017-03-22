import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmotionsService } from '../services/emotions.service';
import { EmotionsStat } from '../models/emotions-stat.model';

@Component({
  selector: '[daily-average-chart]',
  templateUrl: './daily-average-chart.component.html',
  styleUrls: ['./daily-average-chart.component.scss'],
  providers: [ EmotionsService ]
})
export class DailyAverageChartComponent implements OnInit {
  chart: any;
  options: Object;

  constructor(private emotionsService: EmotionsService) {
    this.options = {
      chart: {
        polar: true
      },
      title : { text : `Today's emotions average` },
      xAxis: {
        categories: [],
        lineWidth: 0,
        tickmarkPlacement: 'on',
      },
      pane: {
        startAngle: 180,
      },
      tooltip: {
        pointFormat: '{point.y:.3f}'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          type: 'area',
          data: [],
          pointPlacement: 'on',
          showInLegend: false
        }
      ]
    };
  }

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
  }

  fetchStats() {
    this.emotionsService.getCurrentAverage()
      .subscribe(
        emotion => {
          const categories = [];
          const dataSet = [];

          for (const key in emotion.emotion) {
            if (['neutral', 'contempt'].indexOf(key) > -1) {
              continue;
            }

            categories.push(key.charAt(0).toUpperCase() + key.slice(1));
            dataSet.push(emotion.emotion[key]);
          }

          this.chart.xAxis[0].setCategories(categories);
          this.chart.series[0].setData(dataSet);
        },
        error => { });
  }

  ngOnInit() {
    this.fetchStats();
  }
}
