import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Emotion } from '../models/emotion.model';
import { EmotionsStat } from '../models/emotions-stat.model';
import { DatePipe } from '@angular/common';

@Injectable()
export class EmotionsService {
    API_BASE_URL = 'https://api.atmospherehub.com/';

    constructor (private http: Http) {}

    getCurrentAverage(): Observable<EmotionsStat> {
        const datePipe = new DatePipe('en-US');

        const today = new Date();
        today.setDate(today.getDate());

        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        return this.http
            .get(`${this.API_BASE_URL}/timeseries?` +
                 `from=${datePipe.transform(today, 'MM-dd-yyyy')}` +
                 `&to=${datePipe.transform(tomorrow, 'MM-dd-yyyy')}&group=Day`)
            .map(this.extractSingle.bind(this));
    }

    getWeeklyAverage(): Observable<EmotionsStat[]> {
        const datePipe = new DatePipe('en-US');

        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);

        const today = new Date();
        today.setDate(today.getDate());

        return this.http
            .get(`${this.API_BASE_URL}/timeseries?` +
                 `from=${datePipe.transform(weekAgo, 'MM-dd-yyyy')}` +
                 `&to=${datePipe.transform(today, 'MM-dd-yyyy')}&group=Day`)
            .map(this.extractArray.bind(this));
    }

    private extractSingle(res: Response): EmotionsStat {
        const responseObject = res.json();
        const emotionStats = responseObject.map(this.toEmotionStats);
        return emotionStats.length > 0 ? emotionStats[0] : new EmotionsStat();
    }

    private extractArray(res: Response): EmotionsStat[] {
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
