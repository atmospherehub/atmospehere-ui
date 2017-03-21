import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Emotion } from '../models/emotion.model';
import { EmotionsStat } from '../models/emotions-stat.model';
import { DatePipe } from '@angular/common';

@Injectable()
export class EmotionsService {
    API_BASE_URL = 'https://dm-atmosphere-func.azurewebsites.net/';

    constructor (private http: Http) {}

    getWeeklyAverage (): Observable<EmotionsStat[]> {
        const datePipe = new DatePipe('en-US');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 8);

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        return this.http
            .get(`${this.API_BASE_URL}/timeseries?` +
                 `from=${datePipe.transform(weekAgo, 'MM-dd-yyyy')}` +
                 `&to=${datePipe.transform(yesterday, 'MM-dd-yyyy')}&group=Day`)
            .map(this.extractData.bind(this));
    }

    private extractData(res: Response): EmotionsStat[] {
        const responseObject = res.json();
        return responseObject.map(this.toEmotionStats);
    }

    private toEmotionStats(r: any): EmotionsStat {
        const stat = <EmotionsStat>{
            emotion: {
                anger: r.AvgAnger,
                contempt: r.AvgContempt,
                disgust: r.AvgDisgust,
                neutral: r.AvgNeutral,
                sadness: r.AvgSadness,
                happiness: r.AvgHappiness,
                surprise: r.AvgSurprise,
                fear: r.AvgFear,
            },
            samplesNumber: r.GroupCount,
            formattedDate: r.FormattedDate,
        };
        return stat;
    }
}