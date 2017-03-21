import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EmotionsService } from '../services/emotions.service';
import { EmotionsStat } from '../models/emotions-stat.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ EmotionsService ]
})
export class DashboardComponent implements OnInit {
  chart: any;
  options: Object;
  emotionsStats: EmotionsStat[];

  constructor(private emotionsService: EmotionsService) {
    this.options = {
      chart: {
        type: 'areaspline',
        zoomType: 'xy',
        resetZoomButton: {
          position: {
            align: 'left',
            x: 5,
            y: -5
          }
        }
      },
      title : { text : 'Last 7 days emotions average' },
      xAxis: {
        categories: [],
        title: {
          enabled: false
        }
      },
      plotOptions: {
        areaspline: {
          stacking: 'normal'
        }
      },
      tooltip: {
        shared: true,
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.3f}</b><br/>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Happiness',
          data: [],
        }, {
          name: 'Surprise',
          data: [],
        }, {
          name: 'Sadness',
          data: [],
        }, {
          name: 'Disgust',
          data: [],
        }, {
          name: 'Anger',
          data: [],
        }, {
          name: 'Fear',
          data: [],
        }
      ]
    };
  }

  saveInstance(chartInstance: any) {
    this.chart = chartInstance;
  }

  fetchStats() {
    this.emotionsService.getWeeklyAverage()
      .subscribe(
        stats => {
          const dataSet = { };

          for (const emotion of stats) {
            this.chart.xAxis[0].setCategories(this.chart.xAxis[0].categories.concat([emotion.formattedDate]));

            for (const key in emotion.emotion) {
              if (key in dataSet) {
                dataSet[key].push(emotion.emotion[key]);
              } else {
                dataSet[key] = [emotion.emotion[key]];
              }
            }
          }

          this.chart.series.forEach((line, index) => {
            line.setData(dataSet[line.name.toLowerCase()]);
          });

          this.emotionsStats = stats;
        },
        error => { });
  }

  ngOnInit() {
    this.fetchStats();
  }

}
