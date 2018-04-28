import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CurrentWeather } from '../current-weather';


@Injectable()
export class CurrentWeatherService {
  current:CurrentWeather = new CurrentWeather('Detroit', '78', 'http://icons.wxug.com/i/c/k/cloudy.gif',
  'sunny', '96', '76');

  apiKey = '720acc4783a4953d57e7b9a8a3c9edb9';
  url
  constructor(private http:HttpClient) { 
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q='
  }

  weatherNow() {
    return this.current;
  }

  localWeather(lat:string, lon:string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=720acc4783a4953d57e7b9a8a3c9edb9&units=imperial`)
      .map((response: Response) => response);
  }


}
