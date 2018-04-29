import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { CurrentWeather } from '../current-weather';

@Injectable()
export class CurrentWeatherService {

  private _localURL = 'http://api.openweathermap.org/data/2.5/forecast?q=Auburn%20Hills,US&appid=720acc4783a4953d57e7b9a8a3c9edb9&units=imperial';
  data: any = {};

  current:CurrentWeather = new CurrentWeather('Detroit', '78', 'http://icons.wxug.com/i/c/k/cloudy.gif',
  'sunny', '96', '76');

  constructor(protected http:HttpClient) {}

  getData() {
    return this.http.get(this._localURL)
      .map((res: Response) => res);
  }

  weatherNow() {
    return this.current;
  }

  localWeather(lat:string, lon:string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=720acc4783a4953d57e7b9a8a3c9edb9&units=imperial`)
    .map(res => res);
  }
  
}